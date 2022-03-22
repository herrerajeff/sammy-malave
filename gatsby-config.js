require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "Sammy Malave",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "tailwindcss",
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: process.env.DATO_API_TOKEN,
        environment: process.env.DATO_ENVIRONMENT,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
