import React from 'react'
import PropTypes from 'prop-types'
import { VideoTemplate } from '../../templates/Video'

const VideoPreview = ({ entry, widgetFor }) => (
  <VideoTemplate
    content={widgetFor('body')}
    title={entry.getIn(['data', 'title'])}
    description={entry.getIn(['data', 'description'])}
    youTubeVideoId={entry.getIn(['data', 'youTubeVideoId'])}
    siteName={entry.getIn(['data', 'siteName'])}
    siteURL={entry.getIn(['data', 'siteURL'])}
  />
)

VideoPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default VideoPreview
