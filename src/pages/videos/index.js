import React from 'react'

import Layout from '../../components/Layout'
import VideoIndex from '../../components/VideoIndex'

export default class VideoIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <div className="content">
            <VideoIndex />
          </div>
        </div>
      </Layout>
    )
  }
}
