import React from 'react'

import Button from '../Button/Button'
import styles from './TextFeatureVertical.module.css'

type Props = {
  content: any
  ctaButtonText?: string
}

const TextFeatureVertical = ({ content, ctaButtonText }: Props) => {
  const { h2, text } = content

  return (
    <div className={styles.mainLayout}>
      <div className={styles.innerLayout}>
        <h2>{h2}</h2>
        <p>{text}</p>
      </div>
      {ctaButtonText && (
        <div className={styles.button}>
          <Button text={ctaButtonText} />
        </div>
      )}
    </div>
  )
}

export default TextFeatureVertical
