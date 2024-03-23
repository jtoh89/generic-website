import { Metadata, ResolvingMetadata } from 'next'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import type {
  PrivacyPolicyPagePayload,
  TermsAndConditionPagePayload,
} from '@/types'

import styles from './Legal.module.css'

export interface PageProps {
  data: PrivacyPolicyPagePayload | TermsAndConditionPagePayload
}

export function LegalPage({ data }: PageProps) {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>{data?.title}</h1>
        {data?.body && <CustomPortableText value={data?.body} />}
      </div>
    </section>
  )
}

export default LegalPage
