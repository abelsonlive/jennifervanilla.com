import React from 'react'
import PropTypes from 'prop-types'
import { ImageGalleryTemplate } from '../../templates/image-gallery'

const ImageGalleryPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  if (data) {
    return (
      <ImageGalleryTemplate
        title={data.title}
        images={data.images}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

ImageGalleryPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ImageGalleryPreview
