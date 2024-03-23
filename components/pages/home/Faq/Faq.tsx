'use client'

import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

import styles from './Faq.module.css'

const Faq = ({ data }) => {
  const [indexopen, setIndexOpen] = useState<number>(99999)

  const handleClick = (index: number) => {
    setIndexOpen(index === indexopen ? 9999 : index)
  }

  const itemsOndData = Object.keys(data).length

  return (
    <section className={styles.faqContainer}>
      <div className={styles.title}>
        <h2>Frequently Asked Questions</h2>
      </div>
      {data.map((item, index) => (
        <React.Fragment key={item.title}>
          <FaqItem
            open={index === indexopen}
            title={item.question}
            onClick={() => handleClick(index)}
          >
            {item.answer}
          </FaqItem>
          {itemsOndData - index < 2 ? null : <Line />}
        </React.Fragment>
      ))}
    </section>
  )
}

type AccordionItemProps = {
  title: string
  children: React.ReactNode
  open: boolean
  onClick: () => void
}

const FaqItem = ({
  title,
  children,
  onClick,
  open = false,
}: AccordionItemProps) => {
  return (
    <article className={styles.faqItem}>
      <div onClick={onClick} className={styles.faqItemHeader}>
        <h4>{title}</h4>
        {open ? <IoIosArrowUp size={30} /> : <IoIosArrowDown size={30} />}
      </div>
      {open && <p className={styles.faqItemText}>{children}</p>}
    </article>
  )
}

const Line = () => {
  return <div className={styles.line}></div>
}

export default Faq
