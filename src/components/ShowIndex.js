import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class ShowIndex extends React.Component {
  render() {
    const { data } = this.props
    const { edges: shows } = data.allMarkdownRemark

    return (
      <table style={{borderCollapse: 'collapse'}} width="700" height="450" cellspacing="0" cellpadding="0" bordercolor="A90015" border="1" align="center">
        <tbody>
        {shows &&
          shows.map(({ node: show }) => (
            <tr bordercolor="A90015" border="1" align="center">
              <div className="is-parent column is-6" key={show.id}>
                <article
                  className={`blog-list-item tile is-child box notification`}>
                  <header>
                    <p className="show-meta">
                      <Link
                        className="title has-text-primary is-size-4"
                        to={show.frontmatter.link}
                      >
                        {show.frontmatter.title}
                      </Link>
                      <span> &bull; </span>
                      <span className="subtitle is-size-5 is-block">
                        {show.frontmatter.date}
                      </span>
                    </p>
                  </header>
                  <p>
                    {show.description}
                    <br />
                    <br />
                    <Link className="button" to={show.fields.slug}>
                      See More →
                    </Link>
                  </p>
                </article>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

ShowIndex.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query ShowIndexQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "show" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                templateKey
                name
                link
                date(formatString: "MMMM DD, YYYY")
                description
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <ShowIndex data={data} count={count} />}
  />
)
