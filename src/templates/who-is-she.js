import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const WhoIsSheTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div className="section">
      <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
        {title}
      </h2>
      <PageContent className="content" content={content} />
    </div>
  )
}

WhoIsSheTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const WhoIsShe = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <WhoIsSheTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

WhoIsShe.propTypes = {
  data: PropTypes.object.isRequired,
}

export default WhoIsShe

export const whoIsSheQuery = graphql`
  query WhoIsShe($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
