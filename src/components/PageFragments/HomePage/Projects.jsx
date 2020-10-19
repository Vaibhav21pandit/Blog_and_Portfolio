import React from 'react';
import { Row, Col } from 'antd';
import ProjectTile from '../../ProjectTile';


export default function Projects() {
  return(
    <div>
      <h2>TOP PROJECTS</h2>
      <div>
        <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12} lg={8}>
        <ProjectTile
        img="github.webp"
        // height={60}
        alt="location image"
        textH4="Anomaly Detection with GAN"
        textH3="Anomaly detection in industrial parts with the help of reconstruction of features with a GAN"
        url='https://github.com'
        />
      </Col>
      <Col xs= {24} sm= {24} md={12} lg={8}>
        <ProjectTile
          img="github.webp"
          alt="Book Image"
          textH4="Healthify-Social Network for Health Freaks"
          textH3="A cross-platform Mobile App made with React Native,Redux and Firebase"
          url='https://github.com/Vaibhav21pandit/Healthify'
        />
      </Col>
      <Col xs={24} sm={24} md={12} lg={8}>
        <ProjectTile
        img="github.webp"
        alt="meeting image"
        textH4="DeepCap:Captioning Black and White Images"
        textH3="Image-to-Text algorithm for Grayscale images, Published in Confluence 2020"
        url='https://github.com/Vaibhav21pandit/DeepCap-Captioning-BlackAndWhite-Images'
        />
      </Col>
      <Col xs={24} sm={24} md={12} lg={8}>
        <ProjectTile
          img="github.webp"
          alt="bike image"
          textH4="Age and Gender Predictor"
          textH3="Deep Learning application to predict age and gender in Images and Video"
          url='https://github.com/Vaibhav21pandit/Age-Gender_prediction'
        />
      </Col>
      <Col xs={24} sm={24} md={12} lg={8}>
        <ProjectTile
          img="github.webp"
          alt="web image"
          textH4="NSFW Detector"
          textH3="A Client side NSFW detector Mobile App for Videos built with React Native and TensorFlow Lite"
          // height={60}
          // width={60}
        />
      </Col>
      <Col xs={24} sm={24} md={12} lg={8}>
        <ProjectTile
          img="github.webp"
          alt="graduation image"
          textH4="Speech-Classifier"
          textH3="A Deep Learning Based Speech Classifier built with R"
          // height={60}
          // width={60}
        />
        </Col>
      </Row>
      </div>
    </div>
  )
}
