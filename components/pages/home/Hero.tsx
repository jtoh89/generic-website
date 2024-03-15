import Image from 'next/image'
import React from 'react'

import Button from '@/components/shared/Button/Button'
import { urlForImage } from '@/sanity/lib/image'

import styles from './Hero.module.css'

const Hero = ({ data }) => {
  console.log('JonO Hero data: ', data)
  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.textSection}>
            <h1>{data.title}</h1>
            <h2>{data.overview}</h2>
          </div>
          <div className={styles.imageHolder}>
            <Image
              src={urlForImage(data.heroImage).url()}
              height={231}
              width={367}
              alt=""
            />
          </div>
          <div className={styles.button}>
            <Button text="Get started" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
