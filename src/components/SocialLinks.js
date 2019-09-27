import React from "react";

const socialLinks = [
  {
    path: "https://www.youtube.com/channel/UCQBUlYLgBHfAtNhZTB4Z9Qg",
    text: "Youtube",
    emoji: "🔗",
    ext: true
  },
  {
    path: "https://www.instagram.com/jennifervanilla/",
    emoji: "🔗",
    text: "Instagram",
    ext: true
  },
  {
    path: "https://twitter.com/jennifervanilla",
    emoji: "🔗",
    text: "Twitter",
    ext: true
  },
  {
    path: "https://jennifervanilla.bandcamp.com/",
    emoji:  "🔗",
    text: "Bandcamp",
    ext: true
  },
  {
    path: "https://soundcloud.com/jennnifervanilla",
    emoji: "🔗",
    text: "Soundcloud",
    ext: true
  },
  {
    path: "https://open.spotify.com/artist/2Itr8TQK5dkOjUpreaamWP",
    emoji: "🔗",
    text: "Spotify",
    ext: true
  }
];

export default class SocialLinks extends React.Component {
  render = () => (
    <div className="social-links">
      {socialLinks.map(link => {
        return (
          <span className="nav-link">
            <a
              href={link.path}
              className="nav-url"
              target={link.ext ? "_blank" : undefined}
            >
              <span className="nav-emoji"> {link.emoji} </span>
              <span> | </span>
              <span className="nav-text">{link.text}</span>
            </a>
            <br />
          </span>
        );
      })}
    </div>
  );
}
