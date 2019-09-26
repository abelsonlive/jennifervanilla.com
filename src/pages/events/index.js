import React from 'react'

import Layout from '../../components/Layout'
import EventIndex from '../../components/EventIndex'

export default class EventIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <div className="content">
            <EventIndex />
          </div>
        </div>
      </Layout>
    )
  }
}
