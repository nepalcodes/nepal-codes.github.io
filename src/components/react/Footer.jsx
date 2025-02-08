import * as React from "react";

export default class Footer extends React.Component {
  render() {
    const headerIcon = "/img/logo/logo_without_border.png";
    const footerIcon = "/img/logo/inverted.png";
    const favicon = "/img/logo/favicon.ico";
    const copyright = `Copyright © ${new Date().getFullYear()} Nepal Codes`;

    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <div>
            <a href={"/"} className="nav-home">
              {footerIcon && (
                <img
                  src={footerIcon}
                  alt={"Nepal Codes"}
                  width="66"
                  height="58"
                />
              )}
            </a>
          </div>
          <div>
            <h5>Follow!</h5>
            <a href="https://www.facebook.com/Nepal-Codes-102647171232011/">
              Facebook Page
            </a>
            <a href="https://www.linkedin.com/company/nepalcodes/">LinkedIn</a>
            <a href="https://twitter.com/nepalcodes">Twitter</a>
          </div>
          <div>
            <h5>Collaborate!</h5>
            <a href="https://www.facebook.com/groups/892067427822061/">
              Facebook Group
            </a>
            <a href="https://github.com/nepalcodes">Github</a>
            <a href="https://discord.gg/xDCGAu2X2s">Discord</a>
          </div>
          <div>
            <h5>Connect!</h5>
            <a href="mailto:team@nepalcodes.com">team@nepalcodes.com</a>
          </div>
        </section>

        <section className="copyright">{copyright}</section>
      </footer>
    );
  }
}
