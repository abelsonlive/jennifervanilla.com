import React from 'react'
import PropTypes from 'prop-types'
import { WhoIsSheTemplate } from '../../templates/who-is-she'

const WhoIsShePreview = ({ entry, widgetFor }) => (
  <WhoIsSheTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

WhoIsShePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default WhoIsShePreview
