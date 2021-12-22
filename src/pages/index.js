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
          <h2 data-testid="heading"> <Link to="/"> About this site  </Link> </h2>
          <p> This is a responsive website written with modern Javascript with use of ReactJS framework.
          </p>
          </div>
          </header>

          <p> I am thankful for your time to visit this website. Please feel free to read more <Link to="/about">about me</Link>,
             or you can check out my {' '}
              <Link to="/resume">resume</Link>, {' '}
              <Link to="/projects">projects</Link>, {' '}
               view <Link to="/stats">statistics</Link>, {' '}
               or <Link to="/contact">contact</Link> me.
               </p>

                <p> Source available <a href="https://github.com/poudelpatwit/Personal-Website">here</a>.</p>
                </article>
               </Main>
               );

export default Index;

//this part is kind of complete
