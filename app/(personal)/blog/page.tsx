import { toPlainText } from '@portabletext/react'
import { Metadata, ResolvingMetadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { Blog } from '@/components/pages/blogPage/Blog'
import { generateStaticSlugs } from '@/sanity/loader/generateStaticSlugs'
import { allBlogPages, loadPage } from '@/sanity/loader/loadQuery'

const PagePreview = dynamic(() => import('@/components/pages/blogPage/Blog'))

export async function generateMetadata(
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return {
    title: 'Blog Page',
    description: 'Blog Page Placeholder',
  }
}

export function generateStaticParams() {
  return generateStaticSlugs('page')
}

export default async function PageSlugRoute(Props) {
  const initial = await allBlogPages()

  console.log('JonO blog page initial:', initial)

  if (draftMode().isEnabled) {
    return <PagePreview data={initial} />
  }

  if (!initial.data) {
    notFound()
  }

  return <Blog data={initial.data} />
}
