import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home.js';
import SignIn from './components/SignIn.js';
import SignUp from './components/SignUp.js';
import Slaves from './components/Slaves.js';
import SlaveControlPanel from './components/SlaveControlPanel.js';

const Routes = (
	<Router>
		<div>
			<Route exact path="/" component={ Home } />
			<Route exact path="/signIn" component={ SignIn } />
			<Route exact path="/signUp" component={ SignUp } />
			<Route path="/slaves/:master" component={ Slaves } />
			<Route path="/controlpanel/:user" component={ SlaveControlPanel } />
		</div>
	</Router>
)

export default Routes;
