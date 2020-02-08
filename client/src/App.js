import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Project from './components/Project';
import Landing from './components/Landing';
import Footer from './components/Footer';

const App = () => (
  <Router>
    <Fragment>
      <Route exact path='/' component={Landing} />
      <Route exact path='/projects' component={Project} />
      <Route exact path='/projects/:name' component={Project} />
      <Footer />
    </Fragment>
  </Router>
);
export default App;
