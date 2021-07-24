import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: `Hey there! My name is Vaibhav Sharma. I currently work as a Software Developer with focus on machine learning and NLP. 
    Prior to this I worked as a Research Engineer, where I built and deployed Computer Vision applications for a healthcare startup. 
    Other than ML/Data Science I have tinkered with building Web and Mobile apps in React/React Native.`,
  paraTwo: `I also have hands on experience of working with cloud infrastructure like AWS/Heroku. I have deployed numerous CV applications
    both personal and professional. Flask and Django are some of the tools I use for Deployment. I believe I'm a fast learner and am always ready to try new things out.`,
};

const AboutMe = () => {
  const description = `${stripTags(pageText.paraOne)} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['Vaibhav', 'Sharma', 'Pandit', 'Research Engineer', 'Python', 'OpenCV', 'Pytorch', 'Tensorflow']}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p>
          {pageText.paraOne}
        </p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH4="Hometown"
            textH3="Yamunanagar, Haryana"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="Book.png"
            alt="Book Image"
            textH4="Avid Reader"
            textH3="Love Reading Non-Fiction"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="icons8-spotify-256.png"
            alt="Spotify image"
            textH4="Audiophile"
            textH3="USER: vaibhavpandit687"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="python.png"
            alt="Python Image"
            textH4="Love Python"
            textH3="My go-to language"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH4="Self Taught Programmer"
            textH3="Thanks to the Web Resources"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="Pursued B.Tech in"
            textH3="Computer Science"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
