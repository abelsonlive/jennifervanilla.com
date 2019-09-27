import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBandcamp, faTwitter, faInstagram, faSoundcloud, faSpotify, faYoutube} from '@fortawesome/free-brands-svg-icons'

const socialLinks = [
  {
    path: "https://www.youtube.com/channel/UCQBUlYLgBHfAtNhZTB4Z9Qg",
    text: "Youtube",
    emoji:<FontAwesomeIcon icon={faYoutube}/>,
    ext: true
  },
  {
    path: "https://www.instagram.com/jennifervanilla/",
    emoji: <FontAwesomeIcon icon={faInstagram}/>,
    text: "Instagram",
    ext: true
  },
  {
    path: "https://twitter.com/jennifervanilla",
    emoji: <FontAwesomeIcon icon={faTwitter}/>,
    text: "Twitter",
    ext: true
  },
  {
    path: "https://jennifervanilla.bandcamp.com/",
    emoji: <FontAwesomeIcon icon={faBandcamp}/>,
    text: "Bandcamp",
    ext: true
  },
  {
    path: "https://soundcloud.com/jennnifervanilla",
    emoji: <FontAwesomeIcon icon={faSoundcloud}/>,
    text: "Soundcloud",
    ext: true
  },
  {
    path: "https://open.spotify.com/artist/2Itr8TQK5dkOjUpreaamWP",
    emoji: <FontAwesomeIcon icon={faSpotify}/>,
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
              <span className="nav-emoji" width="25px">{link.emoji} </span>
              <span className="nav-text">{link.text}</span>
            </a>
            <br />
          </span>
        );
      })}
    </div>
  );
}
