module.exports = {
  siteMetadata: {
    title: `Raccoon Studio`,
    description: `Raccoon is Damien Senger's design studio in Rotterdam (Netherlands) specialised in Web accessibility and inclusive design.`,
    author: `@iamhiwelo`,
    mainNavigation: [
      {
        label: "About me",
        link: "/",
      },
      {
        label: "Projects",
        link: "/projects",
      },
      {
        label: "Workshops",
        link: "/workshops",
      },
      {
        label: "Talks",
        link: "/talks",
      },
      {
        label: "Blog",
        link: "/blog",
      },
    ],
    heroSalutations: [
      {
        content: "Hi!",
        lang: "en",
      },
      {
        content: "Hej!",
        lang: "sv",
      },
      {
        content: "Bonjour !",
        lang: "fr",
      },
    ],
    footerNetworks: [
      {
        icon: "twitter",
        label: "Visit @iamhiwelo on Twitter",
        target: "https://twitter.com/iamhiwelo",
      },
      {
        icon: "linkedin",
        label: "Connect with me on Linkedin",
        target: "https://linkedin.com/in/damiensenger/en",
      },
      {
        icon: "dribbble",
        label: "Discover my shots on Dribbble",
        target: "https://dribbble.com/hiwelo",
      },
      {
        icon: "instagram",
        label: "Take a look at my pictures on Instagram",
        target: "https://instagram.com/hiwelo",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    "gatsby-plugin-offline",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            subsets: [`latin`, `latin-ext`],
            variants: [
              `100`,
              `200`,
              `300`,
              `400`,
              `500`,
              `600`,
              `700`,
              `800`,
              `900`,
            ],
          },
        ],
      },
    },
  ],
}
