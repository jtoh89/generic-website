import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { Blog } from '@/components/pages/blogPage/Blog'
import { generateStaticSlugs } from '@/sanity/loader/generateStaticSlugs'
import { allBlogPages, loadBlogPage } from '@/sanity/loader/loadQuery'

export async function generateMetadata(): Promise<Metadata> {
  const { data: blogPage } = await loadBlogPage()

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
  const blogPageConfig = await loadBlogPage()

  if (!initial.data || !blogPageConfig.data) {
    notFound()
  }

  return <Blog data={initial.data} config={blogPageConfig.data} />
}
