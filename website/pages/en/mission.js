/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Mission(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      content: `We organize activities that enable learning and development for junior software engineers and students`,
      title: 'Learn',
      image: `${baseUrl}img/undraw_book_lover.svg`,
      imageAlign: "bottom"
    },
    {
      content: 'We build software programming projects and applications for the Nepalese community',
      title: 'Code',
      image: `${baseUrl}img/undraw_developer_activity.svg`,
      imageAlign: "bottom"
    },
    {
      content: "We use our creative energy and innovation to make a positive impact in our world",
      title: 'Innovate',
      image: `${baseUrl}img/undraw_new_ideas.svg`,
      imageAlign: "bottom"
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Mission</h1>
          </header>
          <p>Our mission is to Learn, Code, and Innovate to make a positive impact on Nepalese worldwide.</p>
          <GridBlock contents={supportLinks} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Mission;
