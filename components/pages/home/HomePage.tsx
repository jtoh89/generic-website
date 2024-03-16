import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import Hero from '@/components/pages/home/Hero/Hero'
import { ProjectListItem } from '@/components/pages/home/ProjectListItem'
import FeatureImage from '@/components/shared/FeatureImage/FeatureImage'
import TextFeatureHorizontal from '@/components/shared/TextFeatureHorizontal/TextFeatureHorizontal'
import TextFeatureVertical from '@/components/shared/TextFeatureVertical/TextFeatureVertical'
import { resolveHref } from '@/sanity/lib/utils'
import type { HomePagePayload } from '@/types'

import Services from './Services/Services'
import WhyUs from './WhyUs/WhyUs'
import Faq from './Faq/Faq'

export interface HomePageProps {
  data: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const {
    overview = [],
    showcaseProjects = [],
    title = '',
    heroImage,
  } = data ?? {}

  return (
    <>
      <Hero data={data} />
      <Services
        data={[
          {
            header: '10+ years of towing ',
            subheader:
              'With our years of experience, there are no problems that we cannot help you with.',
            icon: 'BsClock',
          },
          {
            subheader:
              'Whether you have car issues at 4pm or 4am, we are here to help you.',
            header: '24/7 Service',
            icon: 'BsFastForward',
          },
          {
            subheader:
              'We are based in Daly City and can reach your location in minutes.',
            header: 'Fast service',
            icon: 'BsFastForwardCircle',
          },
          {
            subheader:
              'Our attitude sets us apart from other Daly City towing companies. We treat every customer like a neighbor.',
            header: 'Friendly',
            icon: 'BsFillPinMapFill',
          },
        ]}
      />
      <WhyUs
        data={{
          header: 'WE ARE COMMITTED TO EXCELLENCE',
          subheader:
            'Reputation is everything so we uphold a high standard to our services. We aim to be the best towing company in Daly City, CA by leaving every one of our customers happy after we provide our services.',
          content: [
            {
              contentHeader: 'Satisfaction Guaranteed',
              text: [
                'In all of our years in the towing business, we have never failed to help drivers in need.',
              ],
              listItems: [],
            },
            {
              contentHeader: 'Quality Equipment',
              text: [
                'All of our drivers are thoroughly trained and equipped with well-maintained trucks and tools.',
              ],
              listItems: [],
            },
            {
              contentHeader: 'Elite Team',
              text: [
                'Our team members are carefully selected and undergo thorough training to ensure the highest level of service. We only hire the best in the industry.',
              ],
              listItems: [],
            },
          ],
        }}
      />
      <TextFeatureVertical content={{ h2: title, text: overview }} />
      <TextFeatureHorizontal
        content={{ h2: title, text: overview }}
        invert={false}
      />
      <FeatureImage
        invert={false}
        content={{
          smallHeader: 'Small Header',
          h2: 'H2 Title over here',
          text: 'Our AI answering service is effective at filtering out spam calls, qualifying leads, and routing them to the proper destination.',
          image: heroImage,
        }}
      />
      <Faq />
      {/* Showcase projects */}
      {/* {showcaseProjects && showcaseProjects.length > 0 && (
        <div className="mx-auto max-w-[100rem] rounded-md border">
          {showcaseProjects.map((project, key) => {
            const href = resolveHref(project?._type, project?.slug)
            if (!href) {
              return null
            }
            return (
              <Link
                key={key}
                href={href}
                data-sanity={encodeDataAttribute?.([
                  'showcaseProjects',
                  key,
                  'slug',
                ])}
              >
                <ProjectListItem project={project} odd={key % 2} />
              </Link>
            )
          })}
        </div>
      )} */}
    </>
  )
}

export default HomePage
