import React from 'react'
import Image from 'next/image'

import { urlForImage } from '@/sanity/lib/image'

import styles from './SharedHero.module.css'

const SharedHero = ({ data }) => {
  return (
    <div className={`${styles.mainLayout}`}>
      <div className={styles.innerLayout}>
        <div className={styles.leftContainer}>
          <h2>
            <span>{data.title}</span>
          </h2>
        </div>

        <div className={styles.rightContainer}>
          <Image
            className={styles.image}
            src={urlForImage(data.heroImage).url()}
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
