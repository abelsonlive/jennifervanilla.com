import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { Player } from "../utils";
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";

export const AudioListTemplate = ({ title, sounds }) => {
  return (
    <Row gutter={40}>
      <h3>{title}</h3>
      <div>
        {sounds &&
          sounds.map(sound => (
            <Col xs={{ span: 6 }} sm={{ span: 6  }} md={{ span: 3 }}
            lg={{ span: 2 }} xl={{ span: 2 }}
            className="player-container"
            >
              <Player soundcloudID={sound.soundcloudID} />
            </Col>
          ))}
      </div>
    </Row>
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
