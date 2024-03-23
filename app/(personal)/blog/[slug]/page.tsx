import { toPlainText } from '@portabletext/react'
import { Metadata, ResolvingMetadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { BlogArticlePage } from '@/components/pages/blogPage/BlogArticlePage'
import { generateStaticSlugs } from '@/sanity/loader/generateStaticSlugs'
import { loadPage } from '@/sanity/loader/loadQuery'
import { pageStructure } from '@/sanity/plugins/settings'
const PagePreview = dynamic(
  () => import('@/components/pages/blogPage/BlogPagePreview'),
)

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { data: page } = await loadPage(params.slug)

  console.log('JonO blog page metaDescription test here', page)

  let descriptionText = ''

  if (page) {
    descriptionText = page.metaDescription
  }

  return {
    title: page?.title,
    description: descriptionText,
  }
}

export function generateStaticParams() {
  return generateStaticSlugs('blogArticles')
}

export default async function PageSlugRoute({ params }: Props) {
  const initial = await loadPage(params.slug)

  if (draftMode().isEnabled) {
    return <PagePreview params={params} initial={initial} />
  }

  if (!initial.data) {
    notFound()
  }

  return <BlogArticlePage data={initial.data} />
}
