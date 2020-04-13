/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Follow!</h5>
            <a href="https://www.facebook.com/Nepal-Codes-102647171232011/">Facebook Page</a>
            <a href="https://www.linkedin.com/company/nepalcodes/">LinkedIn</a>
            <a href="https://twitter.com/nepalcodes">Twitter</a>
          </div>
          <div>
            <h5>Collaborate!</h5>
            <a href="https://www.facebook.com/groups/892067427822061/">Facebook Group</a>
            <a href="https://github.com/nepalcodes">Github</a>
            <a href="https://join.slack.com/t/nepalcodes/shared_invite/enQtNjYzMjE5MjY3MDI4LWI5NWEyNDljZDgzNzExOWQ0NjRhNDU4NDdmZGYzNmE1MDM4NDA3NjRmMWNkZDljMWU1NDhlMjk0NGZmMTU4MjQ">Slack</a>
          </div>
          <div>
            <h5>Connect!</h5>
            <a href="mailto:team@nepalcodes.com">team@nepalcodes.com</a>
          </div>
        </section>

        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;

{/* <i aria-hidden="true" class="v-icon mdi mdi-twitter theme--dark"></i>
<i aria-hidden="true" class="v-icon mdi mdi-github-circle theme--dark"></i>
<i aria-hidden="true" class="v-icon mdi mdi-facebook theme--dark"></i>
<i aria-hidden="true" class="v-icon mdi mdi-slack theme--dark"></i>
<i aria-hidden="true" class="v-icon mdi mdi-email theme--dark"> </i>
<i aria-hidden="true" class="v-icon mdi mdi-phone theme--dark"></i> */}
