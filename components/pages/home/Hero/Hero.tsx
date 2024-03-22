import Image from 'next/image'
import React from 'react'

import Button from '@/components/shared/Button/Button'
import { urlForImage } from '@/sanity/lib/image'

import styles from './Hero.module.css'

const Hero = ({ data }) => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.textSection}>
          <h1>{data.header}</h1>
          <h2>{data.subheader}</h2>
        </div>
        <div className={styles.imageHolder}>
          <Image
            src={urlForImage(data.image).url()}
            height={231}
            width={367}
            alt={data.image.altText}
          />
        </div>
        <div className={styles.button}>
          <Button text="Get started" />
        </div>
      </div>
    </div>
  )
}

export default Hero
