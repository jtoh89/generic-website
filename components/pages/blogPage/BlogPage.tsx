import Image from 'next/image'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { Header } from '@/components/shared/Header'
import { urlForImage } from '@/sanity/lib/image'
import type { BlogPagePayload } from '@/types'

export interface PageProps {
  data: BlogPagePayload | null
}

export function BlogPage({ data }: PageProps) {
  // console.log('JonO BlogPage: ', data)

  const { headerImage, body, overview, title } = data ?? {}

  return (
    <section className="page">
      <div className="page-content">
        {/* <div className="mb-14"> */}
        {/* Header */}
        <Header title={title} description={overview} />

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
