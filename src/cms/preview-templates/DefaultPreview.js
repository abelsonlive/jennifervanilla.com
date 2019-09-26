import React from 'react'
import PropTypes from 'prop-types'
import { DefaultTemplate } from '../../templates/default'

const DefaultPreview = ({ entry, widgetFor }) => (
  <DefaultTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

DefaultPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default DefaultPreview
