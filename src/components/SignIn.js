import React, { Component } from 'react';
// import Button from 'react-bootstrap/Button';
import axios from 'axios';

import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom';

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
		} );
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
		axios
			.get( SERVER_URL )
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
			return <Redirect to='/signUp' />
 		}
		if ( this.state.masterMatch === true ) {
			return <Redirect to={'/slaves/' + this.state.masterId} />
		}

		return(
			<div className="BackdropColor h-100">
				<div className="container h-100">
					<div className="row h-100 d-flex flex-column justify-content-center align-content-center">
						<div className="col-lg-4 col-md-6">
							<div className="card">
								<div className="card-body p-5 text-center">
									<div className="row no-gutters justify-content-center">
										<div className="col">
											<img className="img-fluid mb-4" src={ process.env.PUBLIC_URL + '/prnkstr_long_logo.svg' } />
										</div>
									</div>
									<div className="row no-gutters justify-content-center mb-4">
										<div className="col text-center">
											<h4 className="mb-0">Sign In</h4>
										</div>
									</div>
									<form onSubmit={ this._handleSubmit }>
										<div className="row no-gutters justify-content-center">
											<div className="col">
												<div className="form-group">
													<input className="form-control text-center" onChange={ this._handleName } type="text" placeholder="Master Name" />
												</div>
											</div>
										</div>
										<div className="row justify-content-center">
											<div className="col">
												<div className="form-group">
													<input className="form-control text-center" onChange={ this._handlePassword } type="password" placeholder="Password" />
												</div>
											</div>
										</div>
										<div className="row justify-content-center mb-1">
											<div className="col">
												<button className="btn btn-block btn-outline-success" type="submit">Submit</button>
											</div>
										</div>
									</form>
									<div className="row justify-content-center">
										<div className="col" className="text-center">
											<hr className="my-4"/>
											<Link to="/signup"><h5 className="text-danger mb-0">No Account? No Worries.</h5></Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
} // end SignIn component

export default SignIn;
