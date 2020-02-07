import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Project from './components/Project'
import Landing from './components/Landing';

const App = () => (
  <Router>
    <Fragment>
    <Route exact path='/' component={Landing} />
    <Route exact path='/projects' component={Project} />
    <Route exact path='/projects/:name' component={Project} />
    </Fragment>
  </Router>
);
export default App;
