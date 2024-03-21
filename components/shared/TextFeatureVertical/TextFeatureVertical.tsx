import React from 'react'
import styles from './TextFeatureVertical.module.css'
import Button from '../Button/Button'

const TextFeatureVertical = ({ content }) => {
  const { h2, text } = content

  return (
    <div className={styles.mainLayout}>
      <div className={styles.innerLayout}>
        <h2>{h2}</h2>
        <p>{text}</p>
      </div>
      <div className={styles.button}>
        <Button text="Get started" />
      </div>
    </div>
  )
}

export default TextFeatureVertical
