import React from "react";

export const addScriptTag = scriptUrl => {
  const tag = window.document.createElement("script");
  tag.type = "text/javascript";
  tag.src = scriptUrl;
  const headTag = window.document.getElementsByTagName("head")[0];
  headTag.parentNode.appendChild(tag);
};

export class Player extends React.Component {
  render() {
    // addScriptTag('https://w.soundcloud.com/player/api.js')
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
