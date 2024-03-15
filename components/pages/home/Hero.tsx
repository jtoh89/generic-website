import Image from 'next/image'
import React from 'react'

import styles from './Hero.module.css'

const Hero = ({ content }) => {
  //   const { h1, subheader, image } = content
  return (
    <>
      <div className={styles.mainLayout}>
        <h1 className={styles.h1}>Header H1 tag is here</h1>
        <p className={styles.p}>Subheader placed over here now subheader</p>
        {/* <Button text="Get started" /> */}
      </div>
      {/* <div className={styles.imageHolder}>
        <Image
          className={styles.image}
          src={image.imageSrc}
          alt={image.imageAltText}
        />
      </div> */}
    </>
  )
}

export default Hero
