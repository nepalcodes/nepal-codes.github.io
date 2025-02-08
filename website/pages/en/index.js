const React = require("react");
const ReactDOMServer = require("react-dom/server");

const CompLibrary = require("../../core/CompLibrary.js");
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = "" } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = (props) => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = (props) => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = (props) => (
      <React.Fragment>
        <div className="projectLogo">
          <img src={`${baseUrl}img/logo/logo.png`} alt="Project Logo" />
        </div>
        <h2 className="projectTitle">
          {props.title}
          <small>{props.tagline}</small>
        </h2>
      </React.Fragment>
    );

    const PromoSection = (props) => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = (props) => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href={"https://github.com/nepalcodes"}>
              <i className="fab fa-github"></i> Github
            </Button>
            <Button
              href={
                "https://join.slack.com/t/nepalcodes/shared_invite/enQtNjYzMjE5MjY3MDI4LWI5NWEyNDljZDgzNzExOWQ0NjRhNDU4NDdmZGYzNmE1MDM4NDA3NjRmMWNkZDljMWU1NDhlMjk0NGZmMTU4MjQ"
              }
            >
              <i className="fab fa-slack"></i> Slack
            </Button>
            <Button href="https://www.facebook.com/groups/892067427822061/">
              <i className="fab fa-facebook"></i> Facebook
            </Button>
            <Button href={"https://www.linkedin.com/company/nepalcodes/"}>
              <i className="fab fa-linkedin"></i> LinkedIn
            </Button>
            {/* <Button href={"mailto:team@nepalcodes.com"}><i className="far fa-envelope"></i> Email</Button> */}
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = "" } = this.props;
    const { baseUrl } = siteConfig;

    const SubscriptionForm = () => {
      return (
        <React.Fragment>
          <div>
            {`Join us online on: `}
            <a href="https://www.facebook.com/groups/892067427822061/">
              Facebook
            </a>
            {`, `}
            <a href="https://github.com/nepalcodes">Github</a>
            {`, `}
            <a href="https://join.slack.com/t/nepalcodes/shared_invite/enQtNjYzMjE5MjY3MDI4LWI5NWEyNDljZDgzNzExOWQ0NjRhNDU4NDdmZGYzNmE1MDM4NDA3NjRmMWNkZDljMWU1NDhlMjk0NGZmMTU4MjQ">
              Slack
            </a>
            {`. Register as a member here! `}
          </div>
          <link
            href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css"
            rel="stylesheet"
            type="text/css"
          />
          <div id="mc_embed_signup">
            <form
              action="https://nepalcodes.us4.list-manage.com/subscribe/post?u=6429aaeccb0a0afdc33847559&amp;id=0f86a0ffaa"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              noValidate
            >
              <div id="mc_embed_signup_scroll">
                <div className="indicates-required">
                  <span className="asterisk">*</span> indicates required
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-EMAIL">
                    Email Address <span className="asterisk">*</span>
                  </label>
                  <input
                    type="email"
                    defaultValue=""
                    name="EMAIL"
                    className="required email"
                    id="mce-EMAIL"
                  />
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-FNAME">
                    First Name <span className="asterisk">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    name="FNAME"
                    className="required"
                    id="mce-FNAME"
                  />
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-LNAME">
                    Last Name <span className="asterisk">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    name="LNAME"
                    className="required"
                    id="mce-LNAME"
                  />
                </div>
                <div id="mce-responses" className="clear">
                  <div className="response" id="mce-error-response"></div>
                  <div
                    className="response"
                    id="mce-success-response"
                    style={{ display: "none" }}
                  ></div>
                </div>
                <div
                  style={{ position: "absolute", left: "-5000px" }}
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_6429aaeccb0a0afdc33847559_0f86a0ffaa"
                    tabIndex="-1"
                    defaultValue=""
                  />
                </div>
                <div className="clear pluginWrapper buttonWrapper">
                  <input
                    type="submit"
                    defaultValue="Join"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button"
                  />
                </div>
              </div>
            </form>
          </div>
          <script
            type="text/javascript"
            src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
          ></script>
          <script type="text/javascript">
            {`(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);`}
          </script>
        </React.Fragment>
      );
    };

    const Block = (props) => (
      <Container
        padding={["bottom", "top"]}
        id={props.id}
        background={props.background}
      >
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const MissionStatement = () => (
      <Block background="light">
        {[
          {
            content:
              "Our mission is to **Learn**, **Code**, and **Innovate** to " +
              "make a positive impact on Nepalese worldwide. We learn " +
              "and teach through mentorship programs and hands on experience. " +
              "We code by building real world software applications such as " +
              "our current project United Nepali.",
            image: `${baseUrl}img/undraw_group_chat.svg`,
            imageAlign: "right",
            title: "Our Mission",
          },
        ]}
      </Block>
    );

    const AboutUs = () => (
      <Block>
        {[
          {
            content:
              "Welcome to Nepal Codes! We are a community for students, professionals and specialists in software development and technology. We collaborate with different institutions to empower Nepalese worldwide with innovations in technology. Nepal codes is a not-for-profit, inclusive organization. We welcome anyone interested to participate in meetups, workshops and projects.",
            image: `${baseUrl}img/undraw_pair_programming.svg`,
            imageAlign: "left",
            title: "Namaste",
          },
        ]}
      </Block>
    );

    const GetInTouch = () => (
      <Block>
        {[
          {
            content: ReactDOMServer.renderToString(<SubscriptionForm />),
            image: `${baseUrl}img/undraw_real_time_collaboration.svg`,
            imageAlign: "left",
            title: "Get In Touch",
          },
        ]}
      </Block>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <AboutUs />
          <MissionStatement />
          <GetInTouch />
        </div>
      </div>
    );
  }
}

module.exports = Index;
