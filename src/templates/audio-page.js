import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Player from 'react-soundcloud-widget-player'

export const AudioPageTemplate = ({
  content,
  contentComponent,
  title,
  soundcloudID,
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
        <Player title={title} track={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${soundcloudID}`}/>
        <br/>
        { siteName &&  <small> with: <Link to={siteURL}> {siteName} </Link> </small> }
        <br/>
        <PostContent content={content} />
       </div>
    </section>
  )
}

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
}

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
            <meta
              name="description"
              content={audio.frontmatter.description}
            />
          </Helmet>
        }
      />
    </Layout>
  )
}

AudioPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

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
`
