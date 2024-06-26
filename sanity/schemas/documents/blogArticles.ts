import { DocumentIcon, ImageIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  type: 'document',
  name: 'blogArticles',
  title: 'Blog Articles',
  icon: DocumentIcon,
  fields: [
    {
      name: 'publishDate',
      title: 'Publish Date',
      type: 'date',
      description: 'The date when the content was published.',
      options: {
        dateFormat: 'MMMM D, YYYY',
        calendarTodayLabel: 'Today',
        inputUtc: false, // Input time in local time zone
      },
      validation: (Rule) => Rule.required(),
      // Set a default value
      initialValue: () => new Date().toISOString(),
    },
    defineField({
      name: 'metaDescription',
      description: 'Used both for the <meta> description tag for SEO.',
      title: 'Meta Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subTitle',
      description: 'Used for sub title.',
      title: 'Sub Title',
      type: 'text',
      rows: 4,
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'headerImage',
      title: 'Header Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'altText',
          type: 'string',
          title: 'Alt text',
        }),
      ],
    }),
    defineField({
      type: 'array',
      name: 'body',
      title: 'Body',
      description:
        "This is where you can write the page's content. Including custom blocks like timelines for more a more visual display of information.",
      of: [
        // Paragraphs
        defineArrayMember({
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'Url',
                  },
                ],
              },
            ],
          },
          styles: [
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Normal', value: 'normal' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [{ title: 'Bullet', value: 'bullet' }],
        }),
        // Custom blocks
        defineArrayMember({
          name: 'timeline',
          type: 'timeline',
        }),
        defineField({
          type: 'image',
          icon: ImageIcon,
          name: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          preview: {
            select: {
              imageUrl: 'asset.url',
              title: 'caption',
            },
          },
          fields: [
            defineField({
              name: 'altText',
              type: 'string',
              title: 'Alt text',
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
        subtitle: 'Blog Article',
        title,
      }
    },
  },
})
