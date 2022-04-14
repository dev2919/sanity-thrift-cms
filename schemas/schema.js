import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // Add your own types here
    {
      title: "Collection",
      name: "Collection",
      type: "document",
      fields: [
        {
          title: "Collection title",
          name: "title",
          type: "string"
        },
        {
          title: "Collection image",
          name: "image",
          type: "image"
        },
        {
          title: 'Slug',
          name: 'slug',
          type: 'slug',
          options: {
            source: 'title',
            maxLength: 200, // will be ignored if slugify is set
            slugify: input => input
                                 .toLowerCase()
                                 .replace(/\s+/g, '-')
                                 .slice(0, 200)
          }
        }
      ], 
      
    },
    {
      title: "Category",
      name: "Category",
      type: "document",
      fields: [
        {
          title: "Category title",
          name: "title",
          type: "string"
        },
        {
          title: "Category image",
          name: "image",
          type: "image"
        },
        {
          title: 'Slug',
          name: 'slug',
          type: 'slug',
          options: {
            source: 'title',
            maxLength: 200, // will be ignored if slugify is set
            slugify: input => input
                                 .toLowerCase()
                                 .replace(/\s+/g, '-')
                                 .slice(0, 200)
          }
        }
      ], 
      
    }
  ])
})