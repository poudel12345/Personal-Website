import React from 'react';
import { Link } from 'react-router-dom';

//here you will have to import the contact icons. Remaining to document
import ContactIcons from '../Contact/ContactIcons';


const { PUBLIC_URL } = process.env; // set automatically

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      {/*
      //insert an image link with your photo
      */}
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Praful Poudel</h2>
        {/*email*/}
        <p>
          <a href="mailto:prafulpoudel21@gmail.com@gmail.com">
            prafulpoudel21@gmail.com
          </a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2> About </h2>
      <p>
        Hi I am Praful. I am learning react and am fluent at C++, Java and basic
        web development
      </p>
      <ul className="actions">
        <li>
                    {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link>
                         : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
  </section>



  <section id="footer">
        <ContactIcons />
        <p className="copyright">&copy; Praful Poudel <Link to="/">prafulpoudel21.com</Link>.</p>
      </section>
    </section>
);

export default SideBar;
