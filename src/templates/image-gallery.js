import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const ImageGalleryTemplate = ({ title, images }) => {
  return (
    <div className="section">
      <h1>{title}</h1>
      <ul>
        {images &&
          images.map(img => {
            return (
              <li>
                {img.link ? (
                  <a href={img.link} target="_blank" rel="noopener noreferrer">
                    <PreviewCompatibleImage imageInfo={img} />
                  </a>
                ) : (
                  <PreviewCompatibleImage imageInfo={img} />
                )}
                <br />
                {img.alt && <small>{img.alt} </small>}
                { img.creditName && <small><a href={img.creditURL}target="_blank" rel="noopener noreferrer" >{img.creditName}</a></small>}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

ImageGalleryTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.array
};

const ImageGallery = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <ImageGalleryTemplate
        title={post.frontmatter.title}
        images={post.frontmatter.images}
      />
    </Layout>
  );
};

ImageGallery.propTypes = {
  data: PropTypes.object.isRequired
};

export default ImageGallery;

export const imageGalleryQuery = graphql`
  query ImageGallery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        images {
          caption
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
