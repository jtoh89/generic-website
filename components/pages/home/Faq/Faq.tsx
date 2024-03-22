'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import styles from './Faq.module.css'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'

const Data = [
  {
    title: 'What is Frontend Mentor, and how will it help me?',
    content:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    title: 'Is Frontend Mentor free?',
    content:
      'Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.',
  },
  {
    title: 'Can I use Frontend Mentor projects in my portfolio?',
    content:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    title: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    content:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
]

const Faq = () => {
  const [indexopen, setIndexOpen] = useState<number>(99999)

  const handleClick = (index: number) => {
    setIndexOpen(index === indexopen ? 9999 : index)
  }

  const itemsOndData = Object.keys(Data).length

  return (
    <section className={styles.faqContainer}>
      <div className={styles.title}>
        <h2>Frequently Asked Questions</h2>
      </div>
      {Data.map((item, index) => (
        <React.Fragment key={item.title}>
          <FaqItem
            open={index === indexopen}
            title={item.title}
            onClick={() => handleClick(index)}
          >
            {item.content}
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
