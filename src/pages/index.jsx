 /*eslint-disable */
import React from 'react';
import { Layout } from 'antd';
import Header from '../components/PageLayout/Header';

import SidebarWrapper from '../components/PageLayout/Sidebar';
import AboutMe from '../components/PageFragments/HomePage/AboutMe';
import Skills from '../components/PageFragments/HomePage/SkillProgress';
import Projects from '../components/PageFragments/HomePage/Projects';

export default () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <Header />
      <SidebarWrapper>
        <>
          <AboutMe />
          <span>&nbsp;&nbsp;</span>
          <Projects />
          <span>&nbsp;&nbsp;</span>
          <Skills />          
        </>
      </SidebarWrapper>
    </Layout>
  </Layout>
);
 /* eslint-disable */