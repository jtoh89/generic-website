import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import Hero from '@/components/pages/home/Hero'
import { ProjectListItem } from '@/components/pages/home/ProjectListItem'
import { resolveHref } from '@/sanity/lib/utils'
import type { HomePagePayload } from '@/types'
import TextFeatureVertical from '@/components/shared/TextFeatureVertical/TextFeatureVertical'
import TextFeatureHorizontal from '@/components/shared/TextFeatureHorizontal/TextFeatureHorizontal'

export interface HomePageProps {
  data: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { overview = [], showcaseProjects = [], title = '' } = data ?? {}

  return (
    <>
      {/* Header */}
      <Hero data={data} />

      <TextFeatureVertical content={{ h2: title, text: overview }} />
      <TextFeatureHorizontal
        content={{ h2: title, text: overview }}
        invert={false}
      />

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
