import React from 'react'
import PropTypes from 'prop-types'
import { AudioPageTemplate } from '../../templates/audio-page'

const AudioPreview = ({ entry, widgetFor }) => (
  <AudioPageTemplate
    content={widgetFor('body')}
    title={entry.getIn(['data', 'title'])}
    description={entry.getIn(['data', 'description'])}
    soundcloudID={entry.getIn(['data', 'soundcloudID'])}
    siteName={entry.getIn(['data', 'siteName'])}
    siteURL={entry.getIn(['data', 'siteURL'])}
  />
)

AudioPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AudioPreview
