import NumCalculator from 'antd/es/theme/util/calc/NumCalculator'
import Link from 'next/link'

import { ProjectListItem } from '@/components/pages/home/ProjectListItem'
import FeatureImage from '@/components/shared/FeatureImage/FeatureImage'
import TextFeatureHorizontal from '@/components/shared/TextFeatureHorizontal/TextFeatureHorizontal'
import TextFeatureVertical from '@/components/shared/TextFeatureVertical/TextFeatureVertical'
import { resolveHref } from '@/sanity/lib/utils'
import type { AboutPagePayload } from '@/types'

import SharedHero from '../../shared/Hero/SharedHero'

export interface AboutPageProps {
  data: AboutPagePayload
}

export function AboutPage({ data }: AboutPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  console.log('JonO AboutPage data: ', data)

  return (
    <>
      <SharedHero title={data.title} image={data.heroImage} />
      <h1>About Page</h1>
      {/* <FeatureImage
        invert={false}
        content={{
          smallHeader: 'Small Header',
          h2: 'H2 Title over here',
          text: 'Our AI answering service is effective at filtering out spam calls, qualifying leads, and routing them to the proper destination.',
          image: heroImage,
        }}
      /> */}
    </>
  )
}

export default AboutPage
