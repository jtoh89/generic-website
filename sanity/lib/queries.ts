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
    ctaSection,
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

export const blogPageQuery = groq`
  *[_type == "blog"][0]{
    _id,
    seo,
    hero,
  }
`

export const blogArticlesBySlugQuery = groq`
  *[_type == "blogArticles" && slug.current == $slug][0] {
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

export const blogArticlesQuery = groq`
  *[_type == "blogArticles"] {
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

export const termsAndConditionsPageQuery = groq`
  *[_type == "termsAndConditions"][0]{
    _id,
    seo,
    title,
    body,
  }
`

export const privacyPolicyPageQuery = groq`
  *[_type == "privacyPolicy"][0]{
    _id,
    seo,
    title,
    body,
  }
`
