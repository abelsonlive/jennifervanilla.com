import React from "react";

import Layout from "../../components/Layout";
import MusicIndex from "../../components/MusicIndex";

export default class MusicIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <div className="content">
            <MusicIndex />
          </div>
        </div>
      </Layout>
    );
  }
}
