import React from 'react';
import { Link } from 'react-router-dom';

//import the main layout
import Main from '../layouts/Main';

import PersonalStats from '../components/Stats/Personal';

const Stats = () => (
  <Main
    title="Stats"
    description="Some statistics about Praful Poudel"
  >
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/stats">Stats</Link></h2>
        </div>
      </header>
      <PersonalStats />
    </article>
  </Main>
);

export default Stats;