import React from 'react';
import { Link } from 'react-router-dom';

//here you will have to import the contact icons. Remaining to document

const { PUBLIC_URL } = process.env; // set automatically

const SideBar = () => (
  <section id="sideaber">
    //insert an image link with your photo
     /*
    <Link to="/" className="logo">
      <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
    </Link>
    */
    <header>
      <h2> Praful Poudel</h2>
      //email link goes down here /*
      <p>
        <a href="mailto:michael.l.dangelo@gmail.com">
          michael.l.dangelo@gmail.com
        </a>
      </p>
      */
    </header>
  </section>


<section className="blurb">
  <h2> About </h2>
  <p>
    {' '}
    Hi I am Praful. I am learning react and am fluent at C++, Java and basic web
    development
  </p>
  //here we will insert some links to the other pages of the website
  <ul className="actions">
    <li>
      /*
      {!window.location.pathname.includes('/resume') ? (
        <Link to="/resume" className="button">
          Learn More
        </Link>
      ) : (
        <Link to="/about" className="button">
          About Me
        </Link>
      )}
      */
    </li>
  </ul>
</section>;
);

export default SideaBar;
//you can set the top of the side bar here
/*
  <ul className="actions">
    <li>
      {!window.location.pathname.includes('/resume') ? (
        <Link to="/resume" className="button">
          Learn More
        </Link>
      ) : (
        <Link to="/about" className="button">
          About Me
        </Link>
      )}
    </li>
  </ul>
  */

