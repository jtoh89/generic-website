import Image from 'next/image'
import React from 'react'

import { urlForImage } from '@/sanity/lib/image'

import styles from './FeatureImage.module.css'

type Props = {
  content: any
  invert: boolean
}
const FeatureImage = ({ content, invert }: Props) => {
  console.log('JonO feature image', content)

  return (
    <div
      className={`${styles.container} ${invert ? styles.white : styles.black}`}
    >
      <div className={styles.innerLayout}>
        <div className={styles.leftLayout}>
          <div className={styles.leftInnerLayout}>
            {content.smallHeader && <h4>{content.smallHeader}</h4>}
            <h2>{content.h2}</h2>
            <p>{content.text}</p>
          </div>
        </div>
        <div className={styles.rightLayout}>
          <Image
            src={urlForImage(content.image).url()}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt={content.image.altText}
          />
        </div>
      </div>
    </div>
  )
}

export default FeatureImage
