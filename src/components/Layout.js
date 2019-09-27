import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import "./all.css";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import Sidebar from "./Sidebar"
import bg from "../img/bg.jpg";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <Fragment>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />
        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ccff00"
        />
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
        <script
          type="text/javascript"
          src="https://w.soundcloud.com/player/api.js"
        ></script>
      </Helmet>
      <body style={{ backgroundImage: bg }}>
        <div className="container">
          <div className="sidebar"> 
            <Sidebar/> 
          </div>
          <div className="content">
            {children}
          </div>
        </div>
      </body>
    </Fragment>
  );
};

export default TemplateWrapper;
