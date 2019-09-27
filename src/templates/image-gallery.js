import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { ContentGrid } from "../components/ContentGrid";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const ImageGalleryTemplate = ({ title, images }) => {
  const components =
    images &&
    images.map(img => {
      return (
        <div>
          <a href={img.link} target="_blank" rel="noopener noreferrer">
            <PreviewCompatibleImage imageInfo={img} />
          </a>
          {img.caption && <small>{img.caption} </small>}
          {img.creditName && (
            <small>
              <a href={img.creditURL} target="_blank" rel="noopener noreferrer">
                {img.creditName}
              </a>
            </small>
          )}
          <br />
        </div>
      );
    });

  return (
    <div>
      <ContentGrid
        components={components}
        xs={components.length+2}
        sm={components.length+2}
        md={components.length+2}
        lg={components.length+2}
        xl={components.length+2}
        gutter={20}
      />
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
