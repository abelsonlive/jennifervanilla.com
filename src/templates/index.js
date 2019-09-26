import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

export const IndexTemplate = ({
  title,
  heading,
  subheading
}) => (
  <div>
    <div
      style={{
        display: 'flex',
        height: '150px',
        lineHeight: '1',
        justifyContent: 'space-around',
        alignItems: 'left',
        flexDirection: 'column',
      }}
    >
      <h1
        className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
        style={{
          boxShadow:
            'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
          backgroundColor: 'rgb(255, 68, 0)',
          color: 'white',
          lineHeight: '1',
          padding: '0.25em',
        }}
      >
        {title}
      </h1>
      <h3
        className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
        style={{
          boxShadow:
            'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
          backgroundColor: 'rgb(255, 68, 0)',
          color: 'white',
          lineHeight: '1',
          padding: '0.25em',
        }}
      >
        {subheading}
      </h3>
    </div>
  </div>
)

IndexTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string
}

const Index = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
      />
    </Layout>
  )
}

Index.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default Index

export const indexQuery = graphql`
  query IndexTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index" } }) {
      frontmatter {
        title
        heading
        subheading
      }
    }
  }
`
