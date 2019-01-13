module.exports = {
  siteMetadata: {
    title: 'Edvice',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        // icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
          includePaths: ["./src/styles"],
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
          rule: {
            include: /images/
          },
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'yrv6l71p3dd6',
        accessToken: '23ece3b631708055f13539915ceb958cf8e79c7fe8f36ee5508b6e19cbecd7f0',
      },
    },
  ],
}
