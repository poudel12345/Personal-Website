import React from 'react';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//importing main for loding of lazy pages
import Main from './layouts/Main';

//all the css will be used just in the App.js file
import './static/main.scss';

const { PUBLIC_URL } = process.env; //need to learn more about this

const Index = lazy(() => import('./pages/index'));
//import other pages here

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      {/*
      //falback for the lazy loading pages
      */}
      <Switch>
        <Route exact path="/" component={Index} />
        //import other componenets
      </Switch>
    </Suspense>
  </BrowserRouter>
);

//this will have the routing to all my components

export default App;
