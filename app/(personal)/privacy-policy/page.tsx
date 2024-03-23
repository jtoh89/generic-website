import { Metadata } from 'next'

import LegalPage from '@/components/pages/legal/Legal'
import { loadPrivacyPolicyPage } from '@/sanity/loader/loadQuery'

export async function generateMetadata(): Promise<Metadata> {
  const { data: privacyPolicy } = await loadPrivacyPolicyPage()

  return {
    title: privacyPolicy?.seo.metaTitle,
    description: privacyPolicy?.seo.metaDescription,
  }
}

export default async function IndexRoute() {
  const initial = await loadPrivacyPolicyPage()
  if (!initial.data) {
    return (
      <div className="text-center">
        <LegalPage data={initial.data} />
      </div>
    )
  }

  return <LegalPage data={initial.data} />
}
