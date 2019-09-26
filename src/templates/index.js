import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

export const IndexTemplate = ({ title, heading, subheading }) => (
  <div>
    <div>
      <h1>{title}</h1>
      <h2> {heading} </h2>
      <h3>{subheading}</h3>
    </div>
  </div>
);

IndexTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string
};

const Index = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
      />
    </Layout>
  );
};

Index.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default Index;

export const indexQuery = graphql`
  query IndexTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index" } }) {
      frontmatter {
        title
        heading
        subheading
      }
    }
  }
`;
