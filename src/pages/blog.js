/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import BlogPostAbstract from '../components/BlogPostAbstract';
import PageTitle from '../components/PageTitle';
import Button from '../components/Button';
import { SizingSystem } from '../components/core';

const StyledMediumLink = styled(Button)`
  margin-bottom: ${SizingSystem.values.wider};
`;

const StyledHeader = styled.header`
  margin: ${SizingSystem.values.extraLarge} 0;

  @media (min-width: ${SizingSystem.media.laptop}) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges.map(edge => <BlogPostAbstract key={edge.node.id} post={edge.node} />);

  return (
    <Layout narrowContent>
      <SEO title="Blog" />
      <StyledHeader>
        <PageTitle>Blog</PageTitle>
      </StyledHeader>
      {Posts}
      <StyledMediumLink href="https://medium.com/@iamhiwelo">Discover older posts on Medium</StyledMediumLink>
    </Layout>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "dddd D MMMM YYYY")
            path
            title
            published
          }
        }
      }
    }
  }
`;
