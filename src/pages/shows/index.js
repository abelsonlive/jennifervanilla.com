import React from 'react'

import Layout from '../../components/Layout'
import ShowIndex from '../../components/ShowIndex'

export default class ShowIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <div className="content">
            <ShowIndex />
          </div>
        </div>
      </Layout>
    )
  }
}
