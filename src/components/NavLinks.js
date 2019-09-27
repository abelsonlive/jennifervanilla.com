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
    path: "/t-shirts",
    emoji: "👕",
    text: "T-Shirts"
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
    path: "/admin",
    text: "Admin",
    emoji: "🔑"
  }
];

export default class NavLinks extends React.Component {
  render = () => (
    <div className="nav-links" >
      {navLinks.map(link => {
        return (
          <span className="nav-link" zIndex={10000}>
            <a
              href={link.path}
              className="nav-url"
              target={link.ext ? "_blank" : undefined}
            >
              <span className="nav-emoji"> {link.emoji} </span>
              <span className="nav-text">
                <span> | </span>
                {link.text}
              </span>
            </a>
            <br />
          </span>
        );
      })}
    </div>
  );
}
