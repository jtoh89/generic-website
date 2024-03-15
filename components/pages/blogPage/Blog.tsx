'use client'

import { toPlainText } from '@portabletext/react'
import { Pagination } from 'antd'
import { Tag } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { Header } from '@/components/shared/Header'
import { urlForImage } from '@/sanity/lib/image'
import type { BlogPagePayload } from '@/types'

import styles from './Blog.module.css'

export interface Props {
  data: BlogPagePayload[] | null
}

function shortenString(str, maxChars) {
  if (str.length > maxChars) {
    return str.substring(0, maxChars) + '...'
  }
  return str
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
      <div className={styles.cardFooter}>
        <h2>
          <Link href={`/blog/${slug}`}>{title}</Link>
        </h2>
        <p>{publishDate}</p>
        {/* <span className={styles.span}>{date}</span> */}
        <p>{shortenString(subTitle || '', 100)}</p>
        <p>
          <Link href={`/blog/${slug}`}>Continue Reading</Link>
        </p>
      </div>
    </div>
  )
}

export function Blog({ data }: Props) {
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
      <Header title={'Blog Page'} description={['Test descrtiption here']} />
      <div className={styles.innerContainer}>
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

export default Blog
