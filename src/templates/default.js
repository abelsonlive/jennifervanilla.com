import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const DefaultTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div className="section">
      <h2> {title} </h2>
      <PageContent content={content} />
    </div>
  );
};
DefaultTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const Default = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <DefaultTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

Default.propTypes = {
  data: PropTypes.object.isRequired
};

export default Default;

export const DefaultQuery = graphql`
  query Default($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
