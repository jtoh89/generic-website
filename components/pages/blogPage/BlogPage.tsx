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

  console.log('JonO body: ', body)

  return (
    <section className="post">
      <div className="post__content">
        {/* <div className="mb-14"> */}
        {/* Header */}
        <Header title={title} description={overview} />

        {headerImage && (
          <Image
            className="mb-3 post__cover"
            src={urlForImage(headerImage).url()}
            height={231}
            width={367}
            alt=""
          />
        )}

        {/* Body */}
        {body && <CustomPortableText paragraphClasses="text-xl" value={body} />}
        {/* </div> */}
        {/* <div className="absolute left-0 w-screen border-t" /> */}
      </div>
    </section>
  )
}

export default BlogPage
