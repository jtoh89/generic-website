import { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { Header } from '@/components/shared/Header'
import { urlForImage } from '@/sanity/lib/image'
import type { BlogPagePayload } from '@/types'

export interface PageProps {
  data: BlogPagePayload | null
}

export async function generateMetadata(
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return {
    title: 'Blog Page',
    description: 'Blog Page Placeholder',
  }
}

export function BlogPage({ data }: PageProps) {
  const { headerImage, body, subTitle, title, publishDate } = data ?? {}

  return (
    <section className="page">
      <div className="page-content">
        <Header title={title} description={subTitle} />

        {headerImage && (
          <Image
            className="page-header-image"
            src={urlForImage(headerImage).url()}
            height={231}
            width={367}
            alt=""
          />
        )}

        {/* Body */}
        {body && <CustomPortableText value={body} />}
        {/* </div> */}
        {/* <div className="absolute left-0 w-screen border-t" /> */}
      </div>
    </section>
  )
}

export default BlogPage
