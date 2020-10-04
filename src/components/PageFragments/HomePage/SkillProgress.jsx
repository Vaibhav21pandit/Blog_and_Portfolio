import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <h2>My Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>

        <ProgressBar
          percent={80}
          text="Python"
        />
        <ProgressBar
          percent={95}
          text="OpenCV/PIL"
        />
        <ProgressBar
          percent={85}
          text="PyTorch/TensorFlow/Keras"
        />
        <ProgressBar
          percent={90}
          text="Flask/Django"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={70}
          text="React-Native"
        />
        <ProgressBar
          percent={90}
          text="Mysql"
        />
        <ProgressBar
          percent={78}
          text="AWS[SageMaker,Lambda,S3,E2,Amplify,SQS]"
        />
        <ProgressBar
          percent={80}
          text="React/Gatsby"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
