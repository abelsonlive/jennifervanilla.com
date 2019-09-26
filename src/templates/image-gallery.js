import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'

export const ImageGalleryTemplate = ({ title,  images }) => {

  return (
    <div className="section">
      <h1>
        { title }
      </h1>
      <ul>
      {images &&
        images.map( (img) => {
          return (
          <li>
            {img.link ? 
              <Link to={img.link}> <img src={img.image} alt={img.caption || ''}/></Link>
              : 
              <img src={img.image} alt={img.caption || ''}/>
              }
            <br/>
            { img.caption && <small>{img.caption} </small> }
            {/* { img.creditName && <small><Link to={img.creditURL}>{img.creditName}</Link></small>} */}
          </li> 
        )}
      )}
      </ul>
    </div>
  )
}

ImageGalleryTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.array
}

const ImageGallery = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <ImageGalleryTemplate title={post.frontmatter.title} images={post.frontmatter.images}/>
    </Layout>
  )
}

ImageGallery.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ImageGallery

export const imageGalleryQuery = graphql`
  query ImageGallery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        images {
            image
            link
            caption
        }
      }
    }
  }
`