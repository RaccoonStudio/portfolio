module.exports = {
  siteMetadata: {
    title: `Raccoon Studio`,
    description: `Raccoon is Damien Senger's design studio in Rotterdam (Netherlands) specialised in Web accessibility and inclusive design.`,
    author: `@iamhiwelo`,
    blogAuthor: `Damien Senger`,
    blogBio: `I’m a queer designer in Rotterdam specialised in web accessibility fighting every day for a more inclusive web.`,
    mainNavigation: [
      {
        label: 'About me',
        link: '/',
      },
      {
        label: 'Talks & Meetups',
        link: 'https://speaking.raccoon.studio/',
      },
      {
        label: 'Blog',
        link: 'https://blog.raccoon.studio/',
      },
    ],
    heroSalutations: [
      {
        content: 'Hi!',
        lang: 'en',
      },
      {
        content: 'Hej!',
        lang: 'sv',
      },
      {
        content: 'Bonjour !',
        lang: 'fr',
      },
    ],
    footerNetworks: [
      {
        icon: 'twitter',
        label: 'Visit @iamhiwelo on Twitter',
        target: 'https://twitter.com/iamhiwelo',
      },
      {
        icon: 'linkedin',
        label: 'Connect with me on Linkedin',
        target: 'https://linkedin.com/in/damiensenger/en',
      },
      {
        icon: 'dribbble',
        label: 'Discover my shots on Dribbble',
        target: 'https://dribbble.com/hiwelo',
      },
      {
        icon: 'instagram',
        label: 'Take a look at my pictures on Instagram',
        target: 'https://instagram.com/hiwelo',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-typescript`,
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
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            subsets: [`latin`, `latin-ext`],
            variants: [`100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`],
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
        name: 'markdown-pages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: 'markdown-pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: `<svg aria-hidden="true" fill="#666" height="20" version="1.1" viewBox="0 0 16 16" width="20" style="margin-right: 8px; margin-left: -12px;"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              maintainCase: true,
              removeAccents: true,
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noopener noreferrer',
            },
          },
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              width: 640,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              related: false, // Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, // Optional: Disable insertion of <style> border: 0
            },
          },
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
              classPrefix: 'language-',
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
};
