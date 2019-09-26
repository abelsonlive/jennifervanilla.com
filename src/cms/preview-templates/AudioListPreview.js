import React from 'react'
import PropTypes from 'prop-types'
import { AudioListTemplate } from '../../templates/audio-list'

const AudioListPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  if (data) {
    return (
      <AudioListTemplate
        title={data.title}
        sounds={data.sounds}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

AudioListPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default AudioListPreview
