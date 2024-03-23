import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'privacyPolicy',
  title: 'Privacy Policy',
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
      name: 'title',
      title: 'Title',
      type: 'string',
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
      ],
    }),
  ],
})
