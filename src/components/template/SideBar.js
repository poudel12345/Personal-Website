import React from 'react';
import { Link } from 'react-router-dom';

//here you will have to import the contact icons. Remaining to document

const { PUBLIC_URL } = process.env; // set automatically

const SideBar = () => (
  <section id="sideaber">
    //insert an image link with your photo /*
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
);

export default SideaBar;
