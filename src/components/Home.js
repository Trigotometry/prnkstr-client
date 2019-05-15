import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import './App.css';
import SignIn from './SignIn';
import SignUp from './SignUp';

import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap'

class Home extends Component {
	constructor() {
		super();
		this.state = {
			masterName: '',
			password: '',
			confirmPassword: '',
		}
	}
	render() {
		return (
			<Container>
				<Row>
					<Col>
						<h1 className="text-center mb-4">Welcome to Prnkstr</h1>
					</Col>
				</Row>
				<Row>
					<Col>
						<SignIn />
					</Col>
				</Row>
			</Container>
		)
	}
}

export default Home;
