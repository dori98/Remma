require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: "Remma's Bistro",
    description:`Remma's Bistro honlapja`
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,

      options: {
        spaceId: `mat4q9vzqgpi`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.ACCES_TOKEN,
      },

    },

    "gatsby-plugin-gatsby-cloud",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`
  ],
};
