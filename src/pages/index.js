import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Introduction from '../components/introduction';
import Specialties from '../components/specialties';
import { graphql } from 'gatsby';

const contentSpecialties = [
  {
    title: 'Building interfaces with inclusivity\u00AD\u00A0in\u00A0mind',
    content:
      'An accessible interface starts with an accessible design. We can work together to make your projects more inclusive.',
    link: {
      label: 'My portfolio',
      target: '/projects',
    },
  },
  {
    title: 'Bringing accessibility in your work\u00A0\u0026\u00A0workflow',
    content:
      'Accessibility is never a one-time fix. Let me train your product and engineering team to put accessibility at the core of their work.',
    link: {
      label: 'My workshops',
      target: '/workshops',
    },
  },
  {
    title: 'Raising awareness on accessibility\u00AD\u00A0\u0026\u00A0inclusivity',
    content:
      'I enjoy sharing my knowledge and learning from my peers: I spoke in 15+ events and I am a University guest teacher.',
    link: {
      label: 'My talks',
      target: '/talks',
    },
  },
];

const IndexPage = context => (
  <Layout mainClass="home">
    <SEO
      title="Web accessibility & Inclusive Design"
      keywords={[`design studio`, `accessibility`, `inclusive design`, `damien senger`]}
    />
    <Hero salutations={context.data.site.siteMetadata.heroSalutations} heroImage={context.data.heroImage} />
    <Introduction />
    <Specialties content={contentSpecialties} />
  </Layout>
);

export default IndexPage;

export const IndexPageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        heroSalutations {
          content
          lang
        }
      }
    }
    heroImage: file(relativePath: { eq: "hero/damiensenger.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 1280, height: 720) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
