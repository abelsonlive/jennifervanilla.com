import React from 'react'
import PropTypes from 'prop-types'
import { IndexTemplate } from '../../templates/index'

const IndexPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexTemplate
        image={data.image}
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPreview
