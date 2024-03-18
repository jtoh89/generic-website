import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import Link from 'next/link'

import { AboutPage } from '@/components/pages/about/AboutPage'
import { HomePage } from '@/components/pages/home/HomePage'
import { studioUrl } from '@/sanity/lib/api'
import { loadAboutPage } from '@/sanity/loader/loadQuery'

const AboutPagePreview = dynamic(
  () => import('@/components/pages/about/AboutPage'),
)

export default async function IndexRoute() {
  const initial = await loadAboutPage()
  if (!initial.data) {
    return (
      <div className="text-center">
        <AboutPage data={null} />
      </div>
    )
  }

  return <AboutPage data={initial.data} />
}