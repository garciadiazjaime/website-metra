import React from 'react';
import {RouteHandler} from 'react-router';

import HeaderSection from './Header.react';
import FooterSection from './Footer.react';


export default class Layout extends React.Component {

  render() {
    return (
      <div>
        <header id="header">
          <HeaderSection/>
        </header>
        <div id="mainContent" className="container">
          <RouteHandler/>
        </div>
        <footer id="footer">
          <FooterSection/>
        </footer>
      </div>
    );
  }
}
