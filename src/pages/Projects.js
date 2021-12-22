import React from 'react';
import { Link } from 'react-router-dom';

//import the main layout
import Main from '../layouts/Main';

//import cell component and also data do display for this component
import Cell from '../components/Projects/Cell';
//data
import data from '../data/projects';

//functional component
const Projects = () => (
  <Main
    title="Projects"
    description="Learn about Praful Poudel's projects."
  >
<article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">Projects</Link></h2>
          <p>Some projects that I have worked on.</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);
export default Projects;
//export the project