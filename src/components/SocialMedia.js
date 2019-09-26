import React from "react";
import { SocialIcon } from "react-social-icons";

const SocialMedia = class extends React.Component {
  render() {
    return (
      <div className="column is-4 social">
        {/* Youtube */}
        <SocialIcon
          url="https://www.youtube.com/channel/UCQBUlYLgBHfAtNhZTB4Z9Qg"
          bgColor={"#000"}
          target="_blank"
          rel="noopener noreferrer"
        />
        {/* Instagram */}
        <SocialIcon
          url="https://www.instagram.com/jennifervanilla"
          bgColor={"#000"}
          target="_blank"
          rel="noopener noreferrer"
        />
        {/* Twitter */}
        <SocialIcon
          url="https://www.twitter.com/jennifervanilla"
          bgColor={"#000"}
          target="_blank"
          rel="noopener noreferrer"
        />
        {/* Bandcamp */}
        <SocialIcon
          url="https://jennifervanilla.bandcamp.com/"
          bgColor={"#000"}
          target="_blank"
          rel="noopener noreferrer"
        />
        {/* Soundcloud */}
        <SocialIcon
          url="https://soundcloud.com/jennifervanilla"
          bgColor={"#000"}
          target="_blank"
          rel="noopener noreferrer"
        />
        {/* Spotify */}
        <SocialIcon
          url="https://open.spotify.com/artist/2Itr8TQK5dkOjUpreaamWP"
          bgColor={"#000"}
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
    );
  }
};

export default SocialMedia;
