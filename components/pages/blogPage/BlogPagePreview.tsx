'use client'

import { type QueryResponseInitial } from '@sanity/react-loader'

import { pagesBySlugQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { BlogPagePayload } from '@/types'

import BlogPage from './BlogPage'

type Props = {
  params: { slug: string }
  initial: QueryResponseInitial<BlogPagePayload | null>
}

export default function PagePreview(props: Props) {
  const { params, initial } = props
  const { data } = useQuery<BlogPagePayload | null>(pagesBySlugQuery, params, {
    initial,
  })

  return <BlogPage data={data!} />
}
