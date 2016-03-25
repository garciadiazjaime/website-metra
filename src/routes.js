import React from 'react';
import {Route, DefaultRoute} from 'react-router';

import Layout from './components/Layout.react';
import Home from './components/Home.react';
import Aboutus from './components/Aboutus.react';
import Schedule from './components/Schedule.react';

export default (
  <Route path="/" handler={Layout}>
    <DefaultRoute name="home" handler={Home} />
    <Route name="aboutus" path="/aboutus" handler={Aboutus} />
    <Route name="schedule" path="/schedule/:line/:stationFrom/:stationTo/:day" handler={Schedule} />
  </Route>
);
