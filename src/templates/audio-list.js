import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { Player } from "../utils";
import { ContentGrid } from "../components/ContentGrid";

export const AudioListTemplate = ({ title, sounds }) => {
  const components = sounds &&
    sounds.map(sound => (
      <Player soundcloudID={sound.soundcloudID} />
  ));
  return (
    <ContentGrid components={components} gutter={20} xs={5} sm={4} md={5} lg={6}/>
  );
};

AudioListTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  sounds: PropTypes.array
};

const AudioList = ({ data }) => {
  const { markdownRemark: post } = data;
  console.log(data);
  return (
    <Layout>
      <AudioListTemplate
        title={post.frontmatter.title}
        sounds={post.frontmatter.sounds}
      />
    </Layout>
  );
};

AudioList.propTypes = {
  data: PropTypes.object.isRequired
};

export default AudioList;

export const audioListQuery = graphql`
  query AudioList($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        sounds {
          title
          soundcloudID
        }
      }
    }
  }
`;
