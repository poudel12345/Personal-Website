
import React from 'react';
import { Link } from 'react-router-dom';

//import the Main layout for the page
import Main from '../layouts/Main';

//import all the other components created for the Resume page
import Education from '../components/Resume/Education';

//import the Skill components
import Skills from '../components/Resume/Skills';

//import the courses component
import Courses from '../components/Resume/Courses';



//import all the data from the data folder created for the resume
import degrees from '../data/resume/degrees';

//import the data for skills
import {skills, categories} from '../data/resume/skills';

//import the data for the courses
import courses from '../data/resume/courses';

const sections = [
    'Education',
    'Skills',
    'Courses',
]

//functional component
const Resume = () => (
  //header for the resume
  <Main
      title="Resume"
      description="Praful Poudel's Resume. Student at Wentworth Institute of Technology."
    >
      <article className="post" id="resume">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="resume">Resume</Link></h2>
            <div className="link-container">
              {sections.map((sec) => (
                <h4 key={sec}>
                  <a href={`#${sec.toLowerCase()}`}>{sec}</a>
                </h4>))}
            </div>

          </div>
        </header>

    {/* //after the header we just need to pass the functional components created*/}
   <Education data = {degrees} />

   {/*skills components which is a bar to showcase different skills in different areas*/}
   <Skills skills = {skills}  categories= {categories}/>

   {/* a section for the courses*/}
   <Courses data = {courses} />



        </article>
        </Main>
);
export default Resume;
//export the component for the use