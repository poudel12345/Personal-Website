import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

//all the imports for the index page
//import Analytics from '../components/template/Analytics';
//import Navigation from '../components/template/Navigation';
import SideBar from '../components/template/SideBar';
//import ScrollToTop from '../components/template/ScrollToTop';

const Main = props => (
  <HelmetProvider>
    {/* <Analytics />
    //using scrolltotop component //
        Import analytics and scrolltotop component

    <ScrollToTop />
    */}
    <Helmet
      titleTemplate="%s | Praful Poudel"
      deafaultTitle="Praful Poudel"
      defer={false}
    >
      {props.title && <title> {props.title} </title>}
      <meta name="description" content={props.description} />
    </Helmet>
    <div id="wrapper">
      {/* //using the navigation component
      <Navigation /> */}
      <div id="main">{props.children}</div>
      {props.fullpage ? null : <SideBar />}

      {/*use the sidebar when the fullpoge
      is not used or we are going to the next page within the site*/}
    </div>
  </HelmetProvider>
);

//defining the proptypes and also the default proptypes
Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string
};

//deafault props
Main.deafultProps = {
  children: null,
  fullpage: false,
  title: null,
  description: 'Praful Poudel personal website.'
};

export default Main;

//this is complete
