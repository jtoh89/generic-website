import FeatureImage from '@/components/shared/FeatureImage/FeatureImage'
import TextFeatureVertical from '@/components/shared/TextFeatureVertical/TextFeatureVertical'
import type { AboutPagePayload } from '@/types'

import SharedHero from '../../shared/Hero/SharedHero'
import Team from './Team/Team'

export interface AboutPageProps {
  data: AboutPagePayload
}

export function AboutPage({ data }: AboutPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  console.log('JonO AboutPage data: ', data)

  return (
    <>
      <SharedHero title={data.hero.header} image={data.hero.image} />
      <FeatureImage
        invert={false}
        content={{
          smallHeader: 'Our Mission',
          h2: data.mission.header,
          text: data.mission.description,
          image: data.mission.image,
        }}
      />
      <TextFeatureVertical
        content={{
          h2: data.ctaSection.header,
          text: data.ctaSection.description,
        }}
      />
      <Team teamMembers={data.team} />
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
