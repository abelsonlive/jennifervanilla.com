import React from 'react'
import PropTypes from 'prop-types'
import { ShowTemplate } from '../../templates/show'

const ShowPreview = ({ entry, widgetFor }) => (
  <ShowTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
)

ShowPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ShowPreview
