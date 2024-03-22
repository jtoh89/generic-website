import { Metadata, ResolvingMetadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import Link from 'next/link'

import { HomePage } from '@/components/pages/home/HomePage'
import { studioUrl } from '@/sanity/lib/api'
import { loadHomePage } from '@/sanity/loader/loadQuery'

const HomePagePreview = dynamic(
  () => import('@/components/pages/home/HomePagePreview'),
)

export async function generateMetadata(): Promise<Metadata> {
  const { data: homePage } = await loadHomePage()
  return {
    title: homePage?.seo.metaTitle,
    description: homePage?.seo.metaDescription,
  }
}

export default async function IndexRoute() {
  const initial = await loadHomePage()

  if (draftMode().isEnabled) {
    return <HomePagePreview initial={initial} />
  }

  // if (!initial.data) {
  //   return (
  //     <div className="layout-container">
  //       <HomePage data={null} />
  //     </div>
  //   )
  // }

  return (
    <div className="layout-container">
      <HomePage data={initial.data} />
    </div>
  )
}
