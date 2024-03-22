import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import Hero from '@/components/pages/home/Hero/Hero'
import { ProjectListItem } from '@/components/pages/home/ProjectListItem'
import FeatureImage from '@/components/shared/FeatureImage/FeatureImage'
import TextFeatureHorizontal from '@/components/shared/TextFeatureHorizontal/TextFeatureHorizontal'
import TextFeatureVertical from '@/components/shared/TextFeatureVertical/TextFeatureVertical'
import { resolveHref } from '@/sanity/lib/utils'
import type { HomePagePayload } from '@/types'

import Faq from './Faq/Faq'
import Services from './Services/Services'
import WhyUs from './WhyUs/WhyUs'

export interface HomePageProps {
  data: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { overview = [], title = '', heroImage } = data ?? {}
  console.log('JonO HomePage data: ', data)

  return (
    <>
      <Hero data={data?.hero} />
      <Services data={data?.services} />
      <WhyUs data={data?.companyHighlights} />
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
