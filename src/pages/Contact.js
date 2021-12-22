import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Praful Poudel via email @ prafulpoudel21@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to reach out to me about absolutely anything. You can email me at: <Link>prafulpoudel21@gmail.com</Link> </p>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;