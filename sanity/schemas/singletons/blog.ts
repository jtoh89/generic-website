import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      title: 'SEO SECTION',
      name: 'seo',
      type: 'object',
      fields: [
        defineField({
          name: 'metaTitle',
          description: 'Meta title for SEO',
          title: 'Meta Title',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'metaDescription',
          description: 'Meta description for SEO',
          title: 'Meta Description',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      title: 'HERO SECTION',
      name: 'hero',
      type: 'object',
      fields: [
        defineField({
          name: 'header',
          title: 'Header',
          type: 'string',
        }),
        defineField({
          name: 'image',
          title: 'Hero Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'altText',
              type: 'string',
              title: 'Hero Alt Text',
              description: 'Alt text',
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        subtitle: 'Blog',
        title,
      }
    },
  },
})
