import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

//all the imports for the index page
import SideBar from '../components/template/SideBar';
import ScrollToTop from '../components/template/ScrollToTop';
import Navigation from '../components/template/Navigation';


const Main = props => (
  <HelmetProvider>
    <Helmet titleTemplate="%s | Praful Poudel" deafaultTitle="Praful Poudel" defer={false}>
      {props.title && <title> {props.title} </title>}
      <meta name="description" content={props.description} />
    </Helmet>

    <div id="wrapper">
      <Navigation />
      <div id="main">{props.children}
      </div>
      {props.fullPage ? null : <SideBar />}
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
  fullPage: false,
  title: null,
  description: "Praful Poudel's personal website."
};

export default Main;

//this is complete
