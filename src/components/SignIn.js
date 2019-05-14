import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
const SERVER_URL = "https://prnkstrserver.herokuapp.com/masters.json"


class SignIn extends Component {
	constructor(){
		super();
		this.state = {
			masterName: '',
			password: '',
			confirmPassword: '',
      SignUp: false,
			SignIn: true
		}
	}

  _handleSignUp = ( event ) => {
    console.log("Link to sign up fired");
    this.setState( {
      SignUp: true,
			SignIn: false
    })
  }

	_handleChange = ( event ) => {
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
		axios.post( SERVER_URL, { name: this.state.masterName, password_digest: this.state.password } ).then( ( response ) => {
			console.log(  response.data )
		} )
	}
	render() {

  if ( this.state.SignUp === true ) {
    return <Redirect to='/SignUp' />
  }

	if ( this.state.SignIn === true ) {
		return (
			<div>
      <h1> SIGN IN </h1>
      <br/>
				<Form onSubmit={ this._handleSubmit } >
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Master Name</Form.Label>
						<Form.Control onChange={ this._handleChange } type="text" placeholder="Enter your username " />
					</Form.Group>
					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control onChange={ this._handlePassword } type="password" placeholder="Password..." />
					</Form.Group>
					<Button variant="primary" type="submit">
						Sign In
					</Button>
				</Form>
          <Button variant="secondary" onClick={ this._handleSignUp }>
            Sign Up
          </Button>
			</div>
		);
	 }
  }
}

export default SignIn;
