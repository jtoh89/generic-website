import Image from 'next/image'
import React from 'react'

import { urlForImage } from '@/sanity/lib/image'

import styles from './FeatureImage.module.css'

const FeatureImage = ({ invert, content }) => {
  return (
    <div className={`${invert ? styles.white : styles.black}`}>
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
            height={231}
            width={367}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default FeatureImage
