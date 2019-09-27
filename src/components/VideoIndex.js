import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import YouTube from "react-youtube";
import { ContentGrid } from './ContentGrid';

class VideoIndex extends React.Component {

  getComponents = () => {
    const { data } = this.props;
    const { edges: videos } = data.allMarkdownRemark;
    const components = videos &&
      videos.map(({ node: video }) => (
        <div>
          <h3> {video.frontmatter.title} </h3>{" "}
          <YouTube
            videoId={video.frontmatter.youTubeVideoId}
            className="youtube-video"
            host="https://www.youtube.com"
            opts={{
              width: "100%",
              height: "100%",
              playerVars: {
                origin: "https://www.youtube.com"
              }
            }}
          />
          <Link to={video.fields.slug}>READ MORE ...</Link>
          <br />
          {video.frontmatter.siteName && (
            <Link to={video.frontmatter.siteURL}>
              {" "}
              <small> 📖 {video.frontmatter.siteName} </small>{" "}
            </Link>
          )}
        </div>
      ))
    return components;
  }

  render() {
    return (
      <div className="video-index">
        <ContentGrid 
          components={this.getComponents()}
          childClassName="video-container"
          lg={6}
          gutter={20}
            />
      </div>
    );
  }
}


VideoIndex.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query VideoIndexQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "video-page" } } }
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
                youTubeVideoId
                siteName
                siteURL
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <VideoIndex data={data} count={count} />}
  />
);
