import Image from 'next/image'
import React from 'react'

import { urlForImage } from '@/sanity/lib/image'

import styles from './SharedHero.module.css'

const SharedHero = ({ data }) => {
  return (
    <div className={`${styles.mainLayout}`}>
      <div className={styles.innerLayout}>
        <h2>Title written here</h2>
      </div>

      <Image
        className="page-header-image"
        src={urlForImage(data.heroImage).url()}
        height={231}
        width={367}
        alt=""
      />
    </div>
  )
}

export default SharedHero
