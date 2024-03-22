import { groq } from 'next-sanity'

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id,
    seo,
    hero,
    services,
    companyHighlights,
    contentPiece,
    featureImage,
    faq,
    title,
    heroImage,
    overview,
  }
`
export const aboutPageQuery = groq`
  *[_type == "about"][0]{
    _id,
    seo,
    hero,
    mission,
    ctaSection,
    team,
    title,
  }
`

export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    body,
    headerImage,
    publishDate,
    metaDescription,
    subTitle,
    title,
    "slug": slug.current,
  }
`

export const allPagesQuery = groq`
  *[_type == "page"] {
    _id,
    title,
    "slug": slug.current,
    publishDate,
    subTitle,
    headerImage,
  }
`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    client,
    coverImage,
    description,
    duration,
    overview,
    site,
    "slug": slug.current,
    tags,
    title,
  }
`

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    footer,
    menuItems[]->{
      _type,
      "slug": slug.current,
      title
    },
    ogImage,
  }
`
