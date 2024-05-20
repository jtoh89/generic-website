'use client'

import styles from './Testimonials.module.css'
import { useState } from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      text: "This is the first testimonial. It's amazing and has helped our business grow!",
      author: 'John Doe',
    },
    {
      text: 'This is the second testimonial. Absolutely wonderful experience! This is the second testimonial. Absolutely wonderful experience! This is the second testimonial. Absolutely wonderful experience!',
      author: 'Jane Smith',
    },
    {
      text: 'This is the third testimonial. A game-changer for our company!',
      author: 'Alice Johnson',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleCircleClick = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className={styles.container}>
      <h2>Testimonials</h2>
      <h3>What Our Clients Say</h3>

      <div className={styles.testimonialsContainer}>
        <div className={styles.testimonial}>
          <h4>{testimonials[currentIndex].text}</h4>
          <p>- {testimonials[currentIndex].author}</p>
        </div>
      </div>
      <div className={styles.toggleContainer}>
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`${styles.toggle} ${currentIndex === index && styles.active}`}
            onClick={() => handleCircleClick(index)}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
