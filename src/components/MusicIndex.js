import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import { Player } from "../utils";
import { ContentGrid } from './ContentGrid';

class MusicIndex extends React.Component {

    getComponents = () => {
      const { data } = this.props;
      const { edges: tracks } = data.allMarkdownRemark;
      const components = tracks &&
        tracks.map( ({ node: track }) => (
            <div className="player">
              <p>{track.frontmatter.title}</p>
              <Player soundcloudID={track.frontmatter.soundcloudID} />
              <Link to={track.fields.slug}> READ MORE </Link>
            </div>
        )
        )
      return components;
    }
    
    render() {
      return (
        <div className="music-index">
          <ContentGrid 
            components={this.getComponents()}
            childClassName="player-container"
            xs={10}
              />
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
