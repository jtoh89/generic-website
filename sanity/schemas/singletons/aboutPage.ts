import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
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
    defineField({
      title: 'MISSION SECTION',
      name: 'mission',
      type: 'object',
      fields: [
        defineField({
          name: 'header',
          title: 'Header',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 4,
        }),
        defineField({
          name: 'image',
          title: 'Mission Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'altText',
              type: 'string',
              title: 'Mission Alt Text',
              description: 'Alt text',
            }),
          ],
        }),
      ],
    }),
    defineField({
      title: 'CTA SECTION',
      name: 'ctaSection',
      type: 'object',
      fields: [
        defineField({
          name: 'header',
          title: 'Header',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 2,
        }),
      ],
    }),
    defineField({
      title: 'TEAM MEMBERS',
      name: 'team',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'myObject',
          title: 'My Object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true, // If you want to allow hotspot for images
              },
            },
            {
              name: 'altText',
              title: 'Alt Text',
              type: 'string',
              description: 'Alternative text for the image',
            },
            {
              name: 'fullName',
              title: 'Full Name',
              type: 'string',
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3, // Adjust based on how much text you expect
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        subtitle: 'About',
        title,
      }
    },
  },
})
