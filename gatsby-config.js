module.exports = {
  siteMetadata: {
    title: `Raccoon Studio`,
    description: `Raccoon is Damien Senger's design studio in Rotterdam (Netherlands) specialised in Web accessibility and inclusive design.`,
    author: `@iamhiwelo`,
    blogAuthor: `Damien Senger`,
    blogBio: `I’m a queer designer in Rotterdam specialised in web accessibility fighting every day for a more inclusive web.`,
    mainNavigation: [
      {
        label: "About me",
        link: "/",
      },
      {
        label: "Talks & Meetups",
        link: "https://speaking.raccoon.studio/",
      },
      {
        label: "Blog",
        link: "https://medium.com/@iamhiwelo",
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
          {
            family: `Playfair Display`,
            subsets: [`latin`, `latin-ext`],
            variants: [`400`, `700`, `900`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: "markdown-pages",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: "markdown-pages",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: "language-",
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
              // This toggles the display of line numbers globally alongside the code.
              // To use it, add the following line in src/layouts/index.js
              // right after importing the prism color scheme:
              //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
              // Defaults to false.
              // If you wish to only show line numbers on certain code blocks,
              // leave false and use the {numberLines: true} syntax below
              showLineNumbers: false,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
  ],
}
