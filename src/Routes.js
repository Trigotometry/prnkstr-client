import React from 'react';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import SlaveControlPanel from './components/SlaveControlPanel';
import SlaveMenu from './components/SlaveMenu';
import { HashRouter as Router, Route } from 'react-router-dom';

const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={ Home } />
      <Route exact path="/SignIn" component={ SignIn } />
      <Route exact path="/SignUp" component={ SignUp } />
      <Route exact path="/ControlPanel" component={ SlaveControlPanel } />
      <Route exact path="/Menu" component={ SlaveMenu } />
    </div>
  </Router>
)


export default Routes;
