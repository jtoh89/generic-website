import React from 'react'

import SelectIcon from '@/components/shared/IconSelector'

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
          {data.companyHighlights.map((highlight, i) => {
            return (
              <div
                key={i}
                className={`${styles.item} ${i === data.companyHighlights.length && styles.noMarginBottom}`}
              >
                <div className={styles.icon}>
                  {SelectIcon({ icon: highlight.icon, size: 50 })}
                </div>
                <div>
                  <h3>{highlight.header}</h3>
                  <p>{highlight.highlightDescription}</p>
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
