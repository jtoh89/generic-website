import { HomeIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: HomeIcon,
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
          name: 'subheader',
          title: 'Sub Header',
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
      title: 'SERVICES SECTION',
      name: 'services',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'myObject',
          title: 'My Object',
          fields: [
            {
              name: 'service',
              title: 'Service Name',
              type: 'string',
            },
            {
              name: 'serviceDescription',
              title: 'Service Description',
              type: 'text',
              rows: 2,
            },
            {
              name: 'icon',
              title: 'React-Icon String',
              type: 'string',
            },
          ],
        },
      ],
    }),
    defineField({
      title: 'COMPANY HIGHLIGHTS SECTION',
      name: 'companyHighlights',
      type: 'object',
      fields: [
        defineField({
          name: 'header',
          title: 'Header',
          type: 'string',
        }),
        defineField({
          name: 'subheader',
          title: 'SubHeader',
          type: 'text',
          rows: 3,
        }),
        defineField({
          title: 'Company Highlights',
          name: 'companyHighlights',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'Highlight',
              title: 'Highlight',
              fields: [
                {
                  name: 'header',
                  title: 'Header',
                  type: 'string',
                },
                {
                  name: 'highlightDescription',
                  title: 'Highlight Description',
                  type: 'text',
                  rows: 3,
                },
                {
                  name: 'icon',
                  title: 'React-Icon String',
                  type: 'string',
                },
              ],
            },
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
          title: 'CTA Description',
          type: 'string',
        }),
      ],
    }),
    defineField({
      title: 'FAQ SECTION',
      name: 'faq',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'faqItem',
          title: 'Question/Answer',
          fields: [
            {
              name: 'question',
              title: 'Question',
              type: 'string',
            },
            {
              name: 'answer',
              title: 'Answer',
              type: 'text',
              rows: 3,
            },
          ],
        },
      ],
    }),
    defineField({
      title: 'CONTENT PIECE',
      name: 'contentPiece',
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
          rows: 3,
        }),
      ],
    }),
    defineField({
      title: 'FEATURE WITH IMAGE',
      name: 'featureImage',
      type: 'object',
      fields: [
        defineField({
          name: 'smallHeader',
          title: 'Small Header',
          type: 'string',
        }),
        defineField({
          name: 'header',
          title: 'Header',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'image',
          title: 'Image',
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
      name: 'title',
      description: 'This field is the title of your personal website.',
      title: 'Title',
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
          description:
            'Alternative text for screenreaders. Falls back on caption if not set',
        }),
      ],
    }),
    defineField({
      name: 'overview',
      description:
        'Used both for the <meta> description tag for SEO, and the personal website subheader.',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.max(155).required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        subtitle: 'Home',
        title,
      }
    },
  },
})
