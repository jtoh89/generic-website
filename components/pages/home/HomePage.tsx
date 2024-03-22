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

  console.log('JonO HomePage data: ', data?.ctaSection)

  return (
    <>
      <Hero data={data?.hero} />
      <Services data={data?.services} />
      <WhyUs data={data?.companyHighlights} />
      <TextFeatureVertical
        content={{
          h2: data?.ctaSection.header,
          text: data?.ctaSection.description,
        }}
        ctaButtonText={'Get Started'}
      />
      <TextFeatureHorizontal
        content={{
          h2: data?.contentPiece.header,
          text: data?.contentPiece.description,
        }}
        invert={false}
      />
      <FeatureImage
        invert={false}
        content={{
          smallHeader: data?.featureImage.smallHeader,
          h2: data?.featureImage.header,
          text: data?.featureImage.description,
          image: data?.featureImage.image,
        }}
      />
      <Faq data={data?.faq} />
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
