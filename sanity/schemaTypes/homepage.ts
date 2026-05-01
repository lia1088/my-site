export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'heroHeading',
      title: 'Hero Heading',
      type: 'string',
    },
    {
      name: 'heroButtonText',
      title: 'Hero Button Text',
      type: 'string',
    },
    {
      name: 'whatIDoHeading',
      title: 'What I Do - Heading',
      type: 'string',
    },
    {
      name: 'whatIDoDescription',
      title: 'What I Do - Description',
      type: 'text',
    },
    {
      name: 'whatIDoButtonText',
      title: 'What I Do - Button Text',
      type: 'string',
    },
    {
      name: 'expertiseSectionLabel',
      title: 'Expertise Section - Eyebrow Label',
      type: 'string',
    },
    {
      name: 'expertiseItems',
      title: 'Expertise Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
            {
              name: 'tags',
              title: 'Tags',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'label', title: 'Label', type: 'string' },
                    { name: 'color', title: 'Color (hex)', type: 'string' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}