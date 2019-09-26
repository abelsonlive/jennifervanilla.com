import React from 'react'
import PropTypes from 'prop-types'
import { EventTemplate } from '../../templates/event'

const EventPreview = ({ entry, widgetFor }) => (
  <EventTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    date={entry.getIn(['data', 'date'])}
    venue={entry.getIn(['data', 'venue'])}
    location={entry.getIn(['data', 'location'])}
    icon={entry.getIn(['data', 'icon'])}
    title={entry.getIn(['data', 'title'])}
  />
)

EventPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default EventPreview
