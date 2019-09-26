import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import { Player } from "../utils";

class MusicIndex extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: tracks } = data.allMarkdownRemark;

    return (
      <div>
        {tracks &&
          tracks.map(({ node: track }) => (
            <div>
              <center>
                {" "}
                <h3> {track.frontmatter.title} </h3>{" "}
              </center>
              <Player soundcloudID={track.frontmatter.soundcloudID} />
              <Link to={track.fields.slug}>📇 ...</Link>
              <br />
            </div>
          ))}
      </div>
    );
  }
}

MusicIndex.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query MusicIndexQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "audio-page" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                templateKey
                date(formatString: "MMM D")
                title
                description
                soundcloudID
                siteName
                siteURL
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <MusicIndex data={data} count={count} />}
  />
);
