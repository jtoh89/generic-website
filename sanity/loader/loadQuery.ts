import 'server-only'

import * as queryStore from '@sanity/react-loader'
import { draftMode } from 'next/headers'

import { client } from '@/sanity/lib/client'
import {
  aboutPageQuery,
  blogArticlesBySlugQuery,
  blogArticlesQuery,
  blogPageQuery,
  homePageQuery,
  privacyPolicyPageQuery,
  projectBySlugQuery,
  settingsQuery,
  termsAndConditionsPageQuery,
} from '@/sanity/lib/queries'
import { token } from '@/sanity/lib/token'
import {
  AboutPagePayload,
  BlogArticleCardPayload,
  BlogArticlePayload,
  BlogPayload,
  HomePagePayload,
  PrivacyPolicyPagePayload,
  ProjectPayload,
  SettingsPayload,
  TermsAndConditionPagePayload,
} from '@/types'

const serverClient = client.withConfig({
  token,
  stega: {
    // Enable stega if it's a Vercel preview deployment, as the Vercel Toolbar has controls that shows overlays
    enabled: process.env.VERCEL_ENV === 'preview',
  },
})

/**
 * Sets the server client for the query store, doing it here ensures that all data fetching in production
 * happens on the server and not on the client.
 * Live mode in `sanity/presentation` still works, as it uses the `useLiveMode` hook to update `useQuery` instances with
 * live draft content using `postMessage`.
 */
queryStore.setServerClient(serverClient)

const usingCdn = serverClient.config().useCdn
// Automatically handle draft mode
export const loadQuery = ((query, params = {}, options = {}) => {
  const {
    perspective = draftMode().isEnabled ? 'previewDrafts' : 'published',
  } = options
  // Don't cache by default
  let revalidate: NextFetchRequestConfig['revalidate'] = 0
  // If `next.tags` is set, and we're not using the CDN, then it's safe to cache
  if (!usingCdn && Array.isArray(options.next?.tags)) {
    revalidate = false
  } else if (usingCdn) {
    revalidate = 60
  }
  return queryStore.loadQuery(query, params, {
    ...options,
    next: {
      revalidate,
      ...(options.next || {}),
    },
    perspective,
    // @TODO add support in `@sanity/client/stega` for the below
    // stega: {enabled: draftMode().isEnabled}
  })
}) satisfies typeof queryStore.loadQuery

/**
 * Loaders that are used in more than one place are declared here, otherwise they're colocated with the component
 */

export function loadSettings() {
  return loadQuery<SettingsPayload>(
    settingsQuery,
    {},
    { next: { tags: ['settings', 'home', 'blogArticles', 'project'] } },
  )
}

export function loadHomePage() {
  return loadQuery<HomePagePayload | null>(
    homePageQuery,
    {},
    { next: { tags: ['home', 'project'] } },
  )
}

export function loadAboutPage() {
  return loadQuery<AboutPagePayload | null>(
    aboutPageQuery,
    {},
    { next: { tags: ['about'] } },
  )
}

export function loadProject(slug: string) {
  return loadQuery<ProjectPayload | null>(
    projectBySlugQuery,
    { slug },
    { next: { tags: [`project:${slug}`] } },
  )
}

export function loadBlogPage() {
  return loadQuery<BlogPayload | null>(
    blogPageQuery,
    {},
    { next: { tags: ['blog'] } },
  )
}

export function loadPage(slug: string) {
  return loadQuery<BlogArticlePayload | null>(
    blogArticlesBySlugQuery,
    { slug },
    { next: { tags: [`blogArticles:${slug}`] } },
  )
}

export function allBlogPages() {
  return loadQuery<BlogArticleCardPayload[] | null>(
    blogArticlesQuery,
    {},
    { next: { tags: ['blog'] } },
  )
}

export function loadTermsAndConditionsPage() {
  return loadQuery<TermsAndConditionPagePayload | null>(
    termsAndConditionsPageQuery,
    {},
    { next: { tags: ['termsAndConditions'] } },
  )
}

export function loadPrivacyPolicyPage() {
  return loadQuery<PrivacyPolicyPagePayload | null>(
    privacyPolicyPageQuery,
    {},
    { next: { tags: ['privacyPolicy'] } },
  )
}
