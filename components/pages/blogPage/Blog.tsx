import { toPlainText } from '@portabletext/react'
import { Pagination } from 'antd'
import { Tag } from 'antd'
import Image from 'next/image'
import Link from 'next/link'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { Header } from '@/components/shared/Header'
import { urlForImage } from '@/sanity/lib/image'
import type { BlogPayload } from '@/types'

import styles from './Blog.module.css'

export interface Props {
  data: BlogPayload[] | null
}

const BlogCard = ({ headerImage, slug, title, overview }) => {
  console.log('BlogCard headerImage: ', headerImage)

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
          <p>{toPlainText(overview)}</p>
        </div>
      </div>
    </Link>
  )
}

export function Blog({ data }: Props) {
  //   const { headerImage, body, overview, title } = data ?? {}

  return (
    <div className={styles.blogContainer}>
      <h2>Blog Page</h2>

      <div className={styles.innerContainer}>
        {data?.map((blog, i) => (
          <BlogCard
            key={i}
            title={blog.title}
            headerImage={blog.headerImage}
            slug={blog.slug}
            overview={blog.overview}
          />
        ))}
      </div>
      {/* <div className={styles.paginatin}>
          <Pagination
            current={currentPage}
            onChange={handlePageChange}
            total={totalItems}
            pageSize={itemsPerPage}
            responsive={true}
            showSizeChanger={false}
          />
        </div> */}
    </div>
  )
}

export default Blog
