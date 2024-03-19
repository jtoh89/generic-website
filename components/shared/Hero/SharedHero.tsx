import Image from 'next/image'
import React from 'react'

import { urlForImage } from '@/sanity/lib/image'

import styles from './SharedHero.module.css'

const SharedHero = ({ title, image }) => {
  return (
    <div className={`${styles.mainLayout}`}>
      <div className={styles.innerLayout}>
        <div className={styles.leftContainer}>
          <h2>
            <span>{title}</span>
          </h2>
        </div>

        <div className={styles.rightContainer}>
          <Image
            className={styles.image}
            src={urlForImage(image).url()}
            fill
            style={{ objectFit: 'cover' }}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default SharedHero
