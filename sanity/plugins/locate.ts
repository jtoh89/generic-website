import { map, Observable } from 'rxjs'
import {
  DocumentLocationResolver,
  DocumentLocationsState,
} from 'sanity/presentation'

import { resolveHref } from '@/sanity/lib/utils'

export const locate: DocumentLocationResolver = (params, context) => {
  if (params.type === 'settings') {
    return {
      message: 'This document is used on all pages',
      tone: 'caution',
    } satisfies DocumentLocationsState
  }

  if (
    params.type === 'home' ||
    params.type === 'about' ||
    params.type === 'blog' ||
    params.type === 'blogArticles' ||
    params.type === 'project' ||
    params.type === 'termsAndConditions' ||
    params.type === 'privacyPolicy'
  ) {
    const doc$ = context.documentStore.listenQuery(
      `*[_id==$id || references($id)]{_type,slug,title}`,
      params,
      { perspective: 'previewDrafts' },
    ) as Observable<
      | {
          _type: string
          slug: { current: string }
          title: string | null
        }[]
      | null
    >
    return doc$.pipe(
      map((docs) => {
        const isReferencedBySettings = docs?.some(
          (doc) => doc._type === 'settings',
        )
        switch (params.type) {
          case 'home':
            return isReferencedBySettings
              ? ({
                  locations: [
                    {
                      title:
                        docs?.find((doc) => doc._type === 'home')?.title ||
                        'Home',
                      href: resolveHref(params.type)!,
                    },
                  ],
                  tone: 'positive',
                  message: 'This document is used to render the front page',
                } satisfies DocumentLocationsState)
              : ({
                  tone: 'critical',
                  message: `The top menu isn't linking to the home page. This might make it difficult for visitors to navigate your site.`,
                } satisfies DocumentLocationsState)
          case 'about':
            return isReferencedBySettings
              ? ({
                  locations: [
                    {
                      title:
                        docs?.find((doc) => doc._type === 'about')?.title ||
                        'About',
                      href: resolveHref(params.type)!,
                    },
                  ],
                  tone: 'positive',
                  message: 'This document is used to render the about page',
                } satisfies DocumentLocationsState)
              : ({
                  tone: 'critical',
                  message: `The top menu isn't linking to the about page. This might make it difficult for visitors to navigate your site.`,
                } satisfies DocumentLocationsState)
          case 'blog':
            return isReferencedBySettings
              ? ({
                  locations: [
                    {
                      title:
                        docs?.find((doc) => doc._type === 'blog')?.title ||
                        'Blog page title',
                      href: resolveHref(params.type)!,
                    },
                  ],
                  tone: 'positive',
                  message: 'This document is used to render the blog page',
                } satisfies DocumentLocationsState)
              : ({
                  tone: 'critical',
                  message: `The top menu isn't linking to the blog page. This might make it difficult for visitors to navigate your site.`,
                } satisfies DocumentLocationsState)
          case 'blogArticles':
            return {
              locations: docs
                ?.map((doc) => {
                  const href = resolveHref(doc._type, doc?.slug?.current)
                  return {
                    title: doc?.title || 'Untitled',
                    href: href!,
                  }
                })
                .filter((doc) => doc.href !== undefined),
              tone: isReferencedBySettings ? 'positive' : 'critical',
              message: isReferencedBySettings
                ? 'The top menu is linking to this page'
                : "The top menu isn't linking to this page. It can still be accessed if the visitor knows the URL.",
            } satisfies DocumentLocationsState
          case 'project':
            return {
              locations: docs
                ?.map((doc) => {
                  const href = resolveHref(doc._type, doc?.slug?.current)
                  return {
                    title: doc?.title || 'Untitled',
                    href: href!,
                  }
                })
                .filter((doc) => doc.href !== undefined),
              tone: isReferencedBySettings ? 'caution' : undefined,
              message: isReferencedBySettings
                ? 'This document is used on all pages as it is in the top menu'
                : undefined,
            } satisfies DocumentLocationsState
            return isReferencedBySettings
              ? ({
                  locations: [
                    {
                      title:
                        docs?.find((doc) => doc._type === 'home')?.title ||
                        'Home',
                      href: resolveHref(params.type)!,
                    },
                  ],
                  tone: 'positive',
                  message: 'This document is used to render the front page',
                } satisfies DocumentLocationsState)
              : ({
                  tone: 'critical',
                  message: `The top menu isn't linking to the home page. This might make it difficult for visitors to navigate your site.`,
                } satisfies DocumentLocationsState)
          case 'termsAndConditions':
            return isReferencedBySettings
              ? ({
                  locations: [
                    {
                      title:
                        docs?.find((doc) => doc._type === 'termsAndConditions')
                          ?.title || 'Terms and Condition',
                      href: resolveHref(params.type)!,
                    },
                  ],
                  tone: 'positive',
                  message:
                    'This document is used to render the Terms and Condition page',
                } satisfies DocumentLocationsState)
              : ({
                  tone: 'critical',
                  message: `The top menu isn't linking to the Terms and Condition page. This might make it difficult for visitors to navigate your site.`,
                } satisfies DocumentLocationsState)
          case 'privacyPolicy':
            return isReferencedBySettings
              ? ({
                  locations: [
                    {
                      title:
                        docs?.find((doc) => doc._type === 'privacyPolicy')
                          ?.title || 'Privacy Policy',
                      href: resolveHref(params.type)!,
                    },
                  ],
                  tone: 'positive',
                  message:
                    'This document is used to render the Privacy Policy page',
                } satisfies DocumentLocationsState)
              : ({
                  tone: 'critical',
                  message: `The top menu isn't linking to the Privacy Policy page. This might make it difficult for visitors to navigate your site.`,
                } satisfies DocumentLocationsState)
          default:
            return {
              message: 'Unable to map document type to locations',
              tone: 'critical',
            } satisfies DocumentLocationsState
        }
      }),
    )
  }

  return null
}
