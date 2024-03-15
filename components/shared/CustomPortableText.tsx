import { PortableText, PortableTextComponents } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import Image from 'next/image'
import { Image as sanityImage } from 'sanity'

import ImageBox from '@/components/shared/ImageBox'
import { TimelineSection } from '@/components/shared/TimelineSection'
import { urlForImage } from '@/sanity/lib/image'

export function CustomPortableText({ value }: { value: PortableTextBlock[] }) {
  const components: PortableTextComponents = {
    block: {
      h2: ({ children }) => {
        return <h2 className="page-section-header">{children}</h2>
      },
      normal: ({ children }) => {
        return <p className={'page-section-text'}>{children}</p>
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
        value: sanityImage & { alt?: string; caption?: string }
      }) => {
        return (
          <div className="my-3">
            {/* <ImageBox
              image={value}
              alt={value.alt}
              classesWrapper="relative aspect-[16/9]"
            /> */}
            <Image
              className="page-section-image"
              src={urlForImage(value).url()}
              height={231}
              width={367}
              alt={value.alt || ''}
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
