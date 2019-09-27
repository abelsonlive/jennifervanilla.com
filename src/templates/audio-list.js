import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { Player } from "../utils";

export const AudioListTemplate = ({ title, sounds }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        {sounds &&
          sounds.map(sound => (
            <div className="player">
              <Player soundcloudID={sound.soundcloudID} />
            </div>
          ))}
      </div>
    </div>
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
