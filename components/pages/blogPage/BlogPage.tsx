import Image from 'next/image'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { Header } from '@/components/shared/Header'
import { urlForImage } from '@/sanity/lib/image'
import type { PagePayload } from '@/types'

export interface PageProps {
  data: PagePayload | null
}

export function BlogPage({ data }: PageProps) {
  console.log('JonO BlogPage: ', data)

  const { headerImage, body, overview, title } = data ?? {}

  return (
    <div>
      <div className="mb-14">
        {/* Header */}
        <Header title={title} description={overview} />

        {headerImage && (
          <Image
            className="post__cover"
            src={urlForImage(headerImage).url()}
            height={231}
            width={367}
            alt=""
          />
        )}
        {/* Body */}
        {body && (
          <CustomPortableText
            paragraphClasses="font-serif max-w-3xl text-gray-600 text-xl"
            value={body}
          />
        )}
      </div>
      <div className="absolute left-0 w-screen border-t" />
    </div>
  )
}

export default BlogPage
