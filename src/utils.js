import React from "react";

export class Player extends React.Component {
  render() {
    return (
      <iframe
        title="sc-player"
        width="100%"
        height="166"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${this.props.soundcloudID}`}
      ></iframe>
    );
  }
}
