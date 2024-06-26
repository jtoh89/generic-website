'use client'

import { type QueryResponseInitial } from '@sanity/react-loader'

import { blogArticlesBySlugQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { BlogArticlePayload } from '@/types'

import BlogArticlePage from './BlogArticlePage'

type Props = {
  params: { slug: string }
  initial: QueryResponseInitial<BlogArticlePayload | null>
}

export default function PagePreview(props: Props) {
  const { params, initial } = props
  const { data } = useQuery<BlogArticlePayload | null>(
    blogArticlesBySlugQuery,
    params,
    {
      initial,
    },
  )

  return <BlogArticlePage data={data!} />
}
