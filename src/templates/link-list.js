import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'

export const LinkListTemplate = ({ title,  links }) => {

  return (
    <div className="section">
      <h1>
        { title }
      </h1>
      <ul>
      {links &&
        links.map( (link) => (
          <li>
            <Link to={link.url}>
              <i>{ link.text }</i>
            </Link>
            <br/>
            <span > -  { link.source } </span>
          </li> 
        )
      )}
      </ul>
    </div>
  )
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