import React from "react";

import NavLinks from './NavLinks'
import SocialLinks from './SocialLinks'

export default class Sidebar extends React.Component {
  render = () => (
    <div className="nav-dropdown">
      <a className="nav-dropdown-toggle-emoji-link" href="/">
        <span className="nav-dropdown-toggle-emoji" role="img">{"🌝"}</span>
      </a>
      <br />
      <NavLinks/>
      <span> 〰 </span>
      <SocialLinks/>
    </div>
  );
}
