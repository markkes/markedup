// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Markedup',
  siteUrl: 'https://markedup.nl',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
      }
    },
    {
      use: 'gridsome-source-graphql-prismic',
      options: {
        url: `https://${process.env.PRISMIC_REPOSITORY}.prismic.io`,
        fieldName: 'prismic',
        typeName: 'prismic',
        useMasterRef: true
      }
    }
  ]
}
