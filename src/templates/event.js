import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const EventTemplate = ({
  content,
  contentComponent,
  date,
  venue,
  location,
  icon,
  helmet
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <h2>{`Jennifer Vanilla @${venue} (${location}), ${date} ${icon}`}</h2>
        <PostContent content={content} />
       </div>
    </section>
  )
}

EventTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  icon: PropTypes.string,
  date: PropTypes.string,
  location: PropTypes.string,
  venue: PropTypes.string,
  helmet: PropTypes.object,
}

const Event = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <EventTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        date={post.frontmatter.date}
        location={post.frontmatter.location}
        venue={post.frontmatter.venue}
        icon={post.frontmatter.icon}
        helmet={
          <Helmet titleTemplate="%s | Event">
            <title>{`Jennifer Vanilla @${ post.frontmatter.venue}, ${ post.frontmatter.location} on ${post.frontmatter.date}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
      />
    </Layout>
  )
}

Event.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Event

export const eventQuery = graphql`
  query EventByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        link
        date(formatString: "MMM D")
        description
        venue
        location
        icon
      }
    }
  }
`
