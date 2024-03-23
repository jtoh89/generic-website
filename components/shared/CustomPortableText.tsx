import { PortableText, PortableTextComponents } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import Image from 'next/image'
import { Image as sanityImage } from 'sanity'

import { TimelineSection } from '@/components/shared/TimelineSection'
import { urlForImage } from '@/sanity/lib/image'

import styles from './CustomPortableText.module.css'

export function CustomPortableText({ value }: { value: PortableTextBlock[] }) {
  const components: PortableTextComponents = {
    block: {
      h2: ({ children }) => {
        return <h2 className={styles.h2}>{children}</h2>
      },
      normal: ({ children }) => {
        return <p className={styles.normal}>{children}</p>
      },
    },
    list: {
      bullet: ({ children }) => {
        return <ul className={styles.bullet}>{children}</ul>
      },
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <a
            className="underline transition hover:opacity-50"
            href={value?.href}
            rel="noreferrer noopener"
          >
            {children}
          </a>
        )
      },
    },
    types: {
      image: ({
        value,
      }: {
        value: sanityImage & { altText?: string; caption?: string }
      }) => {
        return (
          <div className="my-3">
            <Image
              className={styles.image}
              src={urlForImage(value).url()}
              height={231}
              width={367}
              alt={value.altText || ''}
            />
            {value?.caption && (
              <div className="font-sans text-sm text-gray-600">
                {value.caption}
              </div>
            )}
          </div>
        )
      },
      timeline: ({ value }) => {
        const { items } = value || {}
        return <TimelineSection timelines={items} />
      },
    },
  }

  return <PortableText components={components} value={value} />
}
