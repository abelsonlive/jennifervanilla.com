import React from "react";

const navLinks = [
  {
    path: "/who-is-she",
    emoji: "🤷",
    text: "Who Is She?"
  },
  {
    path: "/videos",
    emoji: "📹",
    text: "Videos"
  },
  {
    path: "/music",
    emoji: "🎤",
    text: "Music"
  },
  {
    path: "/gallery",
    emoji: "🤳",
    text: "Gallery"
  },
  {
    path: "/events",
    emoji: "🎭",
    text: "Events"
  },
  {
    path: "/sounds",
    emoji: "🔈",
    text: "Sounds"
  },
  {
    path: "/web-ring",
    emoji: "🌐",
    text: "Web Ring"
  },
  {
    path: "/public-eye",
    emoji: "📰",
    text: '"Public Eye"'
  },
  {
    path: "/contact",
    emoji: "☎️",
    text: "Contact"
  },
  {
    path: "https://www.youtube.com/channel/UCQBUlYLgBHfAtNhZTB4Z9Qg",
    text: "Youtube",
    emoji: "🔗",
    ext: true
  },
  {
    path: "https://www.instagram.com/jennifervanilla",
    text: "Instagram",
    emoji: "🔗",
    ext: true
  },
  {
    path: "https://www.twitter.com/jennifervanilla",
    text: "Twitter",
    emoji: "🔗",
    ext: true
  },
  {
    path: "https://jennifervanilla.bandcamp.com/",
    text: "Bandcamp",
    emoji: "🔗",
    ext: true
  },
  {
    path: "https://soundcloud.com/jennifervanilla",
    text: "Soundcloud",
    emoji: "🔗",
    ext: true
  },
  {
    path: "https://open.spotify.com/artist/2Itr8TQK5dkOjUpreaamWP",
    text: "Spotify",
    emoji: "🔗",
    ext: true
  }
];

export default class Sidebar extends React.Component {
  render = () => (
    <div className="nav-dropdown">
      <div>
        <span className="nav-dropdown-toggle-emoji"> {" 🌝 "} </span>
      </div>
      {navLinks.map(link => {
        return (
          <span className="nav-link">
            <a href={link.path} className="nav-url" target={link.ext ? '_blank': undefined} >
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
