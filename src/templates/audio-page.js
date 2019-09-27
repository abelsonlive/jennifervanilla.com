import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { Player } from "../utils";

export const AudioPageTemplate = ({
  content,
  contentComponent,
  title,
  soundcloudID,
  siteName,
  siteURL,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <div>
      {helmet || ""}
      <h3> {title} </h3>
      <Player soundcloudID={soundcloudID} />
      <PostContent content={content} />
    </div>
  );
};

AudioPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  date: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  soundcloudID: PropTypes.string,
  siteName: PropTypes.string,
  siteURL: PropTypes.string,
  helmet: PropTypes.object
};

const AudioPage = ({ data }) => {
  const { markdownRemark: audio } = data;

  return (
    <Layout>
      <AudioPageTemplate
        content={audio.html}
        contentComponent={HTMLContent}
        title={audio.frontmatter.title}
        soundcloudID={audio.frontmatter.soundcloudID}
        siteName={audio.frontmatter.siteName}
        siteURL={audio.frontmatter.siteURL}
        helmet={
          <Helmet titleTemplate="%s | Event">
            <title>{audio.frontmatter.title}</title>

            <meta name="description" content={audio.frontmatter.description} />
            <script
              type="text/javascript"
              src="https://w.soundcloud.com/player/api.js"
            ></script>
          </Helmet>
        }
      />
    </Layout>
  );
};

AudioPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default AudioPage;

export const audioPageQuery = graphql`
  query AudioByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        soundcloudID
        siteName
        siteURL
      }
    }
  }
`;
