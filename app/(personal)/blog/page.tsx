import { toPlainText } from '@portabletext/react'
import { Metadata, ResolvingMetadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { Blog } from '@/components/pages/blogPage/Blog'
import { generateStaticSlugs } from '@/sanity/loader/generateStaticSlugs'
import { allBlogPages, loadBlogPage } from '@/sanity/loader/loadQuery'

export async function generateMetadata(): Promise<Metadata> {
  const { data: blogPage } = await loadBlogPage()

  console.log('JonO blogPage: ', blogPage)

  return {
    title: blogPage?.seo.metaTitle,
    description: blogPage?.seo.metaDescription,
  }
}

export function generateStaticParams() {
  return generateStaticSlugs('page')
}

export default async function PageSlugRoute(Props) {
  const initial = await allBlogPages()

  console.log('JonO blog page initial:', initial)

  // if (draftMode().isEnabled) {
  //   return <PagePreview data={initial} />
  // }

  if (!initial.data) {
    notFound()
  }

  return <Blog data={initial.data} />
}
