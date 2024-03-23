import { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { Header } from '@/components/shared/Header'
import { urlForImage } from '@/sanity/lib/image'
import type { BlogArticlePayload } from '@/types'

import styles from './BlogArticlePage.module.css'

export interface PageProps {
  data: BlogArticlePayload | null
}

export async function generateMetadata(
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return {
    title: 'Blog Page',
    description: 'Blog Page Placeholder',
  }
}

export function BlogArticlePage({ data }: PageProps) {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <Header title={data?.title} description={data?.subTitle} />

        {data?.headerImage && (
          <Image
            className="page-header-image"
            src={urlForImage(data?.headerImage).url()}
            height={231}
            width={367}
            alt={data?.headerImage.altText || ''}
          />
        )}
        {data?.body && <CustomPortableText value={data?.body} />}
      </div>
    </section>
  )
}

export default BlogArticlePage
