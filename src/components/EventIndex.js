import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
// import PreviewCompatibleImage from './PreviewCompatibleImage'

class EventIndex extends React.Component {
  render() {
    const { data } = this.props
    const { edges: events } = data.allMarkdownRemark

    return (
      <div className="events-page">
        <h3>Events</h3>
        {events &&
          events.map(({ node: event }) => (
              <p>
              <a
                className=""
                href={event.frontmatter.link} 
                target="_blank"
              >
                <span> {event.frontmatter.date} 〰〰〰〰〰  </span>
                <span> @{event.frontmatter.venue}, {event.frontmatter.location} {event.frontmatter.icon}</span>
              </a>
              </p>
          ))}
      </div>
    )
  }
}

EventIndex.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query EventIndexQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "event" } } }
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
                venue
                location
                icon
                link
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <EventIndex data={data} count={count} />}
  />
)
