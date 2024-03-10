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
import type { BlogPayload } from '@/types'

import styles from './Blog.module.css'

export interface Props {
  data: BlogPayload[] | null
}

function shortenString(str, maxChars) {
  if (str.length > maxChars) {
    return str.substring(0, maxChars) + '...'
  }
  return str
}

const BlogCard = ({ headerImage, slug, title, overview }) => {
  return (
    <Link href={`/blog/${slug}`}>
      <div className={styles.blogCard}>
        <div className={styles.blogCardImageContainer}>
          <Image
            className={styles.blogCardImage}
            src={urlForImage(headerImage)?.url() || ''}
            objectFit="cover"
            fill={true}
            alt=""
          />
        </div>
        <div className={styles.cardFooter}>
          <h2>{title}</h2>
          {/* <span className={styles.span}>{date}</span> */}
          <p>{shortenString(toPlainText(overview), 100)}</p>
        </div>
      </div>
    </Link>
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
            overview={blog.overview}
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
