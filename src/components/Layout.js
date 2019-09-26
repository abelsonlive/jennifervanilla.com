import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import "./all.css";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import SocialMedia from "./SocialMedia";
import bg from "../img/bg.jpg";
import sidePanel from "../img/side-panel.jpg";
import welcome from "../img/welcome.gif";
import topBanner from "../img/top-banner.png";

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
        <table
          width="75%"
          border="1"
          align="left"
          cellPadding="1"
          cellSpacing="1"
        >
          <tbody>
            <tr>
              <td align="center">
                <a href="/">
                  <img
                    alt={""}
                    src={topBanner}
                    width="75%"
                    height="88"
                    border="0"
                  />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <SocialMedia />
        <table
          width="75%"
          height="100%"
          border="3"
          align="left"
          cellPadding="0"
          cellSpacing="0"
          borderColor="A90015"
          style={{ borderCollapse: "collapse" }}
        >
          <tbody>
            <tr>
              <td
                width="200"
                align="left"
                valign="top"
                bgcolor="4F0000"
                background={sidePanel}
              >
                <br />
                <a href="/">
                  <img alt={""} src={welcome} border="0" />
                </a>
                <table width="200" border="0" cellPadding="15" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td height="115" valign="top">
                        <a href="/who-is-she" className="nav-link">
                          Who Is She?
                        </a>
                        <br />
                        <a href="/videos" className="nav-link">
                          Videos
                        </a>
                        <br />
                        <a href="/music" className="nav-link">
                          Music
                        </a>
                        <br />
                        <a href="/gallery" className="nav-link">
                          Gallery
                        </a>
                        <br />
                        <a href="/events" className="nav-link">
                          Events
                        </a>
                        <br />
                        <a href="/t-shirts" className="nav-link">
                          T-Shirts
                        </a>
                        <br />
                        <a href="/sounds" className="nav-link">
                          Sound Bank
                        </a>
                        <br />
                        <a href="/web-ring" className="nav-link">
                          Jennifer Pages
                        </a>
                        <br />
                        <a href="/public-eye" className="nav-link">
                          "Public Eye"
                        </a>
                        <br />
                        <a href="/contact" className="nav-link">
                          Contact
                        </a>
                        <br />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <div className="content">{children}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </Fragment>
  );
};

export default TemplateWrapper;
