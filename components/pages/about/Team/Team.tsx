import Image from 'next/image'
import React from 'react'
import styles from './Team.module.css'
import { urlForImage } from '@/sanity/lib/image'

const Team = ({ profiles }) => {
  return (
    <div className={`${styles.mainLayout}`}>
      <h2>Meet the Team</h2>
      {profiles.map((profile, i) => (
        <div key={i} className={`${styles.card}`}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={urlForImage(profile.image).url()}
              fill
              style={{ objectFit: 'cover' }}
              alt=""
            />
          </div>
          <h2>{profile.name}</h2>
          <p>{profile.role}</p>
          <p>{profile.bio}</p>
        </div>
      ))}
    </div>
  )
}

export default Team
