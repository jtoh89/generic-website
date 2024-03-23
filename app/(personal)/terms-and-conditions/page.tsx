import { Metadata } from 'next'

import LegalPage from '@/components/pages/legal/Legal'
import { loadTermsAndConditionsPage } from '@/sanity/loader/loadQuery'

export async function generateMetadata(): Promise<Metadata> {
  const { data: termAndConditions } = await loadTermsAndConditionsPage()

  return {
    title: termAndConditions?.seo.metaTitle,
    description: termAndConditions?.seo.metaDescription,
  }
}

export default async function IndexRoute() {
  const initial = await loadTermsAndConditionsPage()
  if (!initial.data) {
    return (
      <div className="text-center">
        <LegalPage data={initial.data} />
      </div>
    )
  }

  return <LegalPage data={initial.data} />
}
