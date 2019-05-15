import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom';

import { Container, Row, Col, Alert } from 'react-bootstrap'

const SERVER_URL = "https://prnkstrserver.herokuapp.com/masters.json"

class SignIn extends Component {
	constructor(){
		super();
		this.state = {
			masterName: '',
			password: '',
			confirmPassword: '',
			SignUp: false,
			SignIn: true,
			masterMatch: false,
			loginError: '',
			masterId: null
		}
	} // end constructor

	_handleSignUp = ( event ) => {
		// console.log("Link to sign up fired.");
		this.setState( {
			SignUp: true,
			SignIn: false
		})
	}
	_handleName = ( event ) => {
		this.setState( {
			masterName: event.target.value
		} );
	}
	_handlePassword = ( event ) => {
		this.setState( {
			password: event.target.value
		} );
	}
	_handleConfirmPassword = ( event ) => {
		this.setState( {
			confirmPassword: event.target.value
		} );
	}
	_handleSubmit = ( event ) => {
		event.preventDefault();
		axios.get( SERVER_URL )
			.then( ( response ) => {
				// console.log( response )
				for ( let i = 0; i < response.data.length; i += 1 ) {
					if ( this.state.masterName === response.data[ i ].name && this.state.password === response.data[ i ].password_digest ) {
						this.setState( { masterMatch: true, masterId: response.data[i].id } )
					}
				}
			} )
			.catch( ( error ) => {
				// console.log( error )
				this.setState( { loginError: error } )
			} )
	}

	render() {
		if ( this.state.SignUp === true ) {
			return <Redirect to='/SignUp' />
 		}
		if ( this.state.masterMatch === true ) {
			return <Redirect to={'/Slaves/' + this.state.masterId} />
		}

		if ( this.state.SignIn === true ) {
			return (
					<Container>
						<Row>
							<Col className="text-center">
								<h4>Sign In</h4>
							</Col>
						</Row>
						<Row className="justify-content-center mb-4">
							<Col lg={4} md={8}>
								<Form onSubmit={ this._handleSubmit } >
									<Form.Group controlId="formBasicEmail">
										<Form.Label>Master Name</Form.Label>
										<Form.Control onChange={ this._handleName } type="text" placeholder="Enter, master..." />
									</Form.Group>
									<Form.Group controlId="formBasicPassword">
										<Form.Label>Password</Form.Label>
										<Form.Control onChange={ this._handlePassword } type="password" placeholder="Password..." />
									</Form.Group>
									<Row>
										<Col className="text-center">
											<Button variant="success" type="submit">Sign In</Button>
										</Col>
									</Row>
									<Row>
										<Col>
											{ this.state.loginError !== '' &&
												<Alert variant="danger">
													{ this.state.loginError }
												</Alert>
											}
										</Col>
									</Row>
								</Form>
							</Col>
						</Row>
						<Row className="justify-content-center">
							<Col lg={4} md={8} className="text-center">
								<Link className="" to="/signup"><h5>No Account? No Worries.</h5></Link>
							</Col>
						</Row>
					</Container>
			);
		}
  }
} // end SignIn component

export default SignIn;
