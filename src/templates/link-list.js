import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const LinkListTemplate = ({ title,  links }) => {

  return (
    <div>
      <h2>
        { title }
      </h2>
      {links &&
        links.map( (link) => (
          <p>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <i>{ link.text }</i>
            </a>
            <span > -  { link.source } </span>
          </p>
        )
      )}
    </div>
  );
}

LinkListTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.array
}

const LinkList = ({ data }) => {
  const { markdownRemark: post } = data
  console.log(data);
  return (
    <Layout>
      <LinkListTemplate title={post.frontmatter.title} links={post.frontmatter.links}/>
    </Layout>
  )
}

LinkList.propTypes = {
  data: PropTypes.object.isRequired,
}

export default LinkList

export const linkListQuery = graphql`
  query LinkList($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        links {
            url
            text
            source
        }
      }
    }
  }
`