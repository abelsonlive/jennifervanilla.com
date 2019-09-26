import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import YouTube from "react-youtube";

class VideoIndex extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: videos } = data.allMarkdownRemark;

    return (
      <div>
        {videos &&
          videos.map(({ node: video }) => (
            <div>
              <center>
                {" "}
                <h3> {video.frontmatter.title} </h3>{" "}
              </center>
              <YouTube
                videoId={video.frontmatter.youTubeVideoId}
                host="https://www.youtube.com"
                opts={{
                  height: "390",
                  width: "640",
                  playerVars: {
                    origin: "https://www.youtube.com"
                  }
                }}
              />
              <Link to={video.fields.slug}>📇 ...</Link>
              <br />
              {video.frontmatter.siteName && (
                <Link to={video.frontmatter.siteURL}>
                  {" "}
                  <small> 📖 {video.frontmatter.siteName} </small>{" "}
                </Link>
              )}
            </div>
          ))}
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
