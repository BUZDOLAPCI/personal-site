import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import { skills, categories } from '../data/resume/skills';

const sections = [
  'Education',
  'Experience',
  // 'Skills',
  'Courses',
  'References',
];

const Resume = () => (
  <Main>
    <Helmet title="Resume" />
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2>Cem Aslan</h2>
          <h3>Graphics Programmer</h3>
          {/* <h2><Link to="resume">Resume</Link></h2> */}
          {/* <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div> */}
        </div>
        <div className="title">
          <h4>Turkey based</h4>
          <h4>24 Years Old</h4>
          <h4>cemaslan96@outlook.com</h4>
          {/* <h2><Link to="resume">Resume</Link></h2> */}
          {/* <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div> */}
        </div>
      </header>
      
      <Education data={degrees} />
      <Experience data={positions} />
      {/* <Skills skills={skills} categories={categories} /> */}
      <h3>Skills</h3>
      - Have most experience with C/C++, C#. Used Python, Java, Rust and few others on utility basis. <br/>
      - Graphics Debugging, GLSL, HLSL.<br/>
      - Experience with working on a continually developed Engine with established codebase.<br/>
      - Decent knowledge of rendering techniques.<br/>
      - Research and Publication.<br/>
      <Courses data={courses} />
      <References />

    </article>
  </Main>
);

export default Resume;
