import { Metadata, ResolvingMetadata } from 'next'
import dynamic from 'next/dynamic'

import { AboutPage } from '@/components/pages/about/AboutPage'
import { loadAboutPage } from '@/sanity/loader/loadQuery'

export async function generateMetadata(): Promise<Metadata> {
  const { data: aboutPage } = await loadAboutPage()

  return {
    title: aboutPage?.seo.metaTitle,
    description: aboutPage?.seo.metaDescription,
  }
}

export default async function IndexRoute() {
  const initial = await loadAboutPage()
  if (!initial.data) {
    return (
      <div className="text-center">
        <AboutPage data={initial.data} />
      </div>
    )
  }

  return <AboutPage data={initial.data} />
}
