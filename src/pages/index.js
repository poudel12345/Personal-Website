import React from 'react';
import { Link } from 'react-router-dom';

//importing the main layout for the page that has 4 elemets.
//Right now only the sidebar component is ready
import Main from '../layouts/Main';

//have to import the main layout to facilitate the website

const Index = () => (
  <Main
    description={
      'Praful Poudel personal website. Current student at Wentworth Institute of Technology. '
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"> </h2>
          {/* //post a link to a about me site */}
          <p>A responsible, fast and stylish website using react.js.</p>
        </div>
      </header>
    </article>
  </Main>

  //some links to the website other pages
);

export default Index;

//this part is kind of complete
