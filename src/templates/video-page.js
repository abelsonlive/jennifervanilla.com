import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import YouTube from 'react-youtube';

export const VideoPageTemplate = ({
  content,
  contentComponent,
  title,
  youTubeVideoId,
  siteName,
  siteURL,
  helmet
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <h2> {title} </h2>
        { siteName &&  <small> with: <Link to={siteURL}> {siteName} </Link> </small> }
        <YouTube
          videoId={youTubeVideoId}
          opts={{height: '390', width: '640' }}
        />
        <PostContent content={content} />
       </div>
    </section>
  )
}

VideoPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  date: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  youTubeVideoId: PropTypes.string,
  siteName: PropTypes.string,
  siteURL: PropTypes.string,
  helmet: PropTypes.object
}

const VideoPage = ({ data }) => {
  const { markdownRemark: video } = data;

  return (
    <Layout>
      <VideoPageTemplate
        content={video.html}
        contentComponent={HTMLContent}
        title={video.frontmatter.title}
        youTubeVideoId={video.frontmatter.youTubeVideoId}
        siteName={video.frontmatter.siteName}
        siteURL={video.frontmatter.siteURL}
        helmet={
          <Helmet titleTemplate="%s | Event">
            <title>{video.frontmatter.title}</title>
            <meta
              name="description"
              content={video.frontmatter.description}
            />
          </Helmet>
        }
      />
    </Layout>
  )
}

VideoPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default VideoPage;

export const videoPageQuery = graphql`
  query VideoByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        youTubeVideoId
        siteName
        siteURL
      }
    }
  }
`
