import React from 'react'

import styles from './TextFeatureHorizontal.module.css'

type Props = {
  content: any
  invert: boolean
}

const TextFeatureHorizontal = ({ content, invert }: Props) => {
  const { h2, text } = content
  return (
    <div
      className={`${styles.mainLayout} ${invert ? styles.white : styles.black}`}
    >
      <div className={styles.innerLayout}>
        <h2> {h2}</h2>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default TextFeatureHorizontal
