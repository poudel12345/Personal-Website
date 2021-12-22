import React from 'react';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//importing main for loding of lazy pages
import Main from './layouts/Main';

//all the css will be used just in the App.js file
import './static/main.scss';

const { PUBLIC_URL } = process.env; //need to learn more about this

const Index = lazy(() => import('./pages/index'));
const Contact = lazy(() => import ('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const Resume = lazy(() => import ('./pages/Resume'));
const Stats = lazy(() => import('./pages/Stats'));
const Projects= lazy(() => import('./pages/Projects'));

//import other pages here

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      {/*
      //falback for the lazy loading pages
      */}
      <Switch>
      //index page
        <Route exact path="/" component={Index} />
        //import other componenets
        <Route path="/contact" component={Contact} />
        //import About component
        <Route path ="/about" component = {About} />
        //route the path to resume component
        <Route path = "/resume" component ={Resume} />

        //route the path to project coomponent
        <Route path = "/projects" component = {Projects}/>

        //import the Stat component
        <Route path ="/stats" component = {Stats} />

      </Switch>
    </Suspense>
  </BrowserRouter>
);

//this will have the routing to all my components

export default App;
