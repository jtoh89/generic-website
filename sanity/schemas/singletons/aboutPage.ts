import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
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
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          description: 'Alt text',
        }),
      ],
    }),
    defineField({
      name: 'mission',
      type: 'object',
      title: 'Mission',
      fields: [
        defineField({
          name: 'header',
          title: 'Header',
          type: 'string',
        }),
        defineField({
          name: 'subheader',
          title: 'SubHeader',
          type: 'string',
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
      name: 'team',
      title: 'Team Members',
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
