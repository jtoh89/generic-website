'use client'

import { Pagination } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import { Header } from '@/components/shared/Header'
import SharedHero from '@/components/shared/Hero/SharedHero'
import { urlForImage } from '@/sanity/lib/image'
import type { BlogArticlePayload, BlogPayload } from '@/types'

import styles from './Blog.module.css'

export interface Props {
  data: BlogArticlePayload[] | null
  config: BlogPayload | null
}

function shortenString(str, maxChars) {
  if (str.length > maxChars) {
    return str.substring(0, maxChars) + '...'
  }
  return str
}

export function Blog({ data, config }: Props) {
  const itemsPerPage = 6
  const totalItems = data?.length || 0
  const [currentPage, setCurrentPage] = useState(1)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems)

  const itemsToDisplay = data?.slice(startIndex, endIndex)

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className={styles.blogContainer}>
      <SharedHero title={config?.hero.header} image={config?.hero.image} />
      <div className={`${styles.innerContainer}`}>
        {itemsToDisplay?.map((blog, i) => (
          <BlogCard
            key={i}
            title={blog.title}
            headerImage={blog.headerImage}
            slug={blog.slug}
            subTitle={blog.subTitle}
            publishDate={blog.publishDate}
          />
        ))}
      </div>
      <div className={styles.paginatin}>
        <Pagination
          current={currentPage}
          onChange={handlePageChange}
          total={totalItems}
          pageSize={itemsPerPage}
          responsive={true}
          showSizeChanger={false}
        />
      </div>
    </div>
  )
}

const BlogCard = ({ headerImage, slug, title, subTitle, publishDate }) => {
  console.log('JonO BlogCard publishDate: ', publishDate)

  return (
    <div className={styles.blogCard}>
      <div className={styles.blogCardImageContainer}>
        <Link href={`/blog/${slug}`}>
          <Image
            className={styles.blogCardImage}
            src={urlForImage(headerImage)?.url() || ''}
            objectFit="cover"
            fill={true}
            alt=""
          />
        </Link>
      </div>
      <div className={styles.cardContent}>
        <h2>
          <Link href={`/blog/${slug}`}>{title}</Link>
        </h2>
        <p className={styles.date}>{publishDate}</p>
        {/* <span className={styles.span}>{date}</span> */}
        <p>{shortenString(subTitle || '', 100)}</p>
        <p className={styles.continueRead}>
          <Link href={`/blog/${slug}`}>Continue Reading</Link>
        </p>
      </div>
    </div>
  )
}
export default Blog
