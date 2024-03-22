import Image from 'next/image'
import React from 'react'

import { urlForImage } from '@/sanity/lib/image'

import styles from './Team.module.css'

const Team = ({ teamMembers }) => {
  return (
    <div className={styles.mainLayout}>
      <h2>Meet the Team</h2>
      <div className={styles.cardContainer}>
        {teamMembers.map((teamMember, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.imageContainer}>
              <Image
                className={styles.image}
                src={urlForImage(teamMember.image).url()}
                fill
                style={{ objectFit: 'cover' }}
                alt=""
              />
            </div>
            <h3>{teamMember.fullName}</h3>
            <p>{teamMember.title}</p>
            <p>{teamMember.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team
