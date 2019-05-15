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
			<Route exact path="/SignIn" component={ SignIn } />
			<Route exact path="/SignUp" component={ SignUp } />
			<Route exact path="/Slaves/:masterID" component={ Slaves } />
			<Route exact path="/ControlPanel" component={ SlaveControlPanel } />
		</div>
	</Router>
)

export default Routes;
