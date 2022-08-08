require('dotenv').config()
const fetch = require('cross-fetch')
const fs = require('fs')

fetch(process.env.NEXT_PUBLIC_API_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    variables: {},
    query: `
      {
        __schema {
          types {
            kind
            name
            possibleTypes {
              name
            }
          }
        }
      }
    `,
  }),
})
  .then((result) => result.json())
  .then((result) => {
    const possibleTypes = {}

    result.data.__schema.types.forEach((supertype) => {
      if (supertype.possibleTypes) {
        possibleTypes[supertype.name] = supertype.possibleTypes.map((subtype) => subtype.name)
      }
    })

    fs.writeFile('./src/graphql/possible-types.json', JSON.stringify(possibleTypes), (err) => {
      if (err) {
        console.error('Error writing possible-types.json', err)
      } else {
        console.log('Fragment types successfully extracted!')
      }
    })
  })
