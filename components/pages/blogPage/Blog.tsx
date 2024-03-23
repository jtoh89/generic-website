'use client'

import { Pagination } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import SharedHero from '@/components/shared/Hero/SharedHero'
import { urlForImage } from '@/sanity/lib/image'
import type { BlogArticlePayload, BlogPayload } from '@/types'

import styles from './Blog.module.css'

function shortenString(str, maxChars) {
  if (str.length > maxChars) {
    return str.substring(0, maxChars) + '...'
  }
  return str
}

export interface Props {
  data: BlogArticlePayload[] | null
  config: BlogPayload | null
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
    <div className={styles.container}>
      <SharedHero title={config?.hero.header} image={config?.hero.image} />
      <div className={`${styles.innerContainer}`}>
        {itemsToDisplay?.map((blog, i) => <BlogCard key={i} blog={blog} />)}
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

const BlogCard = ({ blog }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImageContainer}>
        <Link href={`/blog/${blog.slug}`}>
          <Image
            className={styles.cardImage}
            src={urlForImage(blog.headerImage)?.url() || ''}
            objectFit="cover"
            fill={true}
            alt={blog.headerImage.altText}
          />
        </Link>
      </div>
      <div className={styles.cardContent}>
        <h2>
          <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
        </h2>
        <p className={styles.date}>{blog.publishDate}</p>
        <p>{shortenString(blog.subTitle || '', 100)}</p>
        <p className={styles.continueRead}>
          <Link href={`/blog/${blog.slug}`}>Continue Reading</Link>
        </p>
      </div>
    </div>
  )
}
export default Blog
