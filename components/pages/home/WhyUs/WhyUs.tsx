import React from 'react'
import { BsHandThumbsUp } from 'react-icons/bs'
import { BsPeople, BsTools } from 'react-icons/bs'

import styles from './WhyUs.module.css'

const WhyUs = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.header}>
          <h2>{data.header}</h2>
          <p>{data.subheader}</p>
        </div>
        <div className={`${styles.itemsContainer}`}>
          {data.content.map((category, i) => {
            return (
              <div
                key={i}
                className={`${styles.item} ${i === data.content.length && styles.noMarginBottom}`}
              >
                <div className={styles.icon}>
                  {(i === 0 && <BsHandThumbsUp size={50} />) ||
                    (i === 1 && <BsTools size={50} />) ||
                    (i === 2 && <BsPeople size={50} />)}
                </div>
                <div>
                  <h3>{category.contentHeader}</h3>
                  <p>{category.text[0]}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default WhyUs
