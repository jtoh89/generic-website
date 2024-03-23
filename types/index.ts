import type { PortableTextBlock } from '@portabletext/types'
import type { Image, ImageAsset } from 'sanity'

export interface MenuItem {
  _type: string
  slug?: string
  title?: string
}

export interface MilestoneItem {
  description?: string
  duration?: {
    start?: string
    end?: string
  }
  image?: Image
  tags?: string[]
  title?: string
}

export interface ShowcaseProject {
  _type: string
  coverImage?: Image
  overview?: PortableTextBlock[]
  slug?: string
  tags?: string[]
  title?: string
}

// Page payloads

export interface HomePagePayload {
  seo: any
  hero: any
  services: any[]
  companyHighlights: any[]
  contentPiece: any
  featureImage: any
  ctaSection: any
  title?: string
  heroImage: Image
  faq: any[]
  overview?: PortableTextBlock[]
  footer?: PortableTextBlock[]
}

export interface AboutPagePayload {
  seo: any
  title: string
  hero: any
  mission: any
  ctaSection: any
  team: any[]
  footer?: PortableTextBlock[]
}

export interface BlogArticlePayload {
  body?: PortableTextBlock[]
  publishDate: string
  headerImage?: Image
  metaDescription: string
  name?: string
  title?: string
  subTitle?: string
  slug?: string
}

export interface BlogPayload {
  title?: string
  slug?: string
  headerImage?: Image
  overview?: PortableTextBlock[]
}

export interface ProjectPayload {
  client?: string
  coverImage?: Image
  description?: PortableTextBlock[]
  duration?: {
    start?: string
    end?: string
  }
  overview?: PortableTextBlock[]
  site?: string
  slug: string
  tags?: string[]
  title?: string
}

export interface SettingsPayload {
  footer?: PortableTextBlock[]
  menuItems?: MenuItem[]
  ogImage?: Image
}
