import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import { Redirect } from "react-router-dom";


const SERVER_URL = "https://prnkstrserver.herokuapp.com/masters.json"

class SignUp extends Component {
	constructor(){
		super();
		this.state = {
			signedUp: false
		}
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
		axios
			.post( SERVER_URL, { name: this.state.masterName, password_digest: this.state.password } )
			.then( ( response ) => {
				console.log( response.data )
				this.setState( { id: response.data.id, signedUp: true } )
			} )
	}
	render() {
		if ( this.state.signedUp ) return <Redirect to={'/slaves/'+ this.state.id } />

		return(
			<div className="BackdropColor h-100">
				<div className="container h-100">
					<div className="row h-100 d-flex flex-column justify-content-center align-content-center">
						<div className="col-lg-4 col-md-6">
							<div className="card">
								<div className="card-body p-5 text-center">
									<div className="row justify-content-center">
										<div className="col">
											<img className="img-fluid pb-4" src={process.env.PUBLIC_URL + '/prnkstr_long_logo.svg'} />
										</div>
									</div>
									<div className="row justify-content-center text-center mb-4">
										<div className="col">
												<h4 className="m-0">Sign Up</h4>
										</div>
									</div>
									<form onSubmit={ this._handleSubmit } >
										<div className="row justify-content-center">
											<div className="col">
												<div className="form-group">
													<input className="form-control text-center" onChange={ this._handleChange } type="text" placeholder="Master Name" />
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
										<div className="row justify-content-center">
											<div className="col">
												<div className="form-group">
													<input className="form-control text-center" onChange={ this._handleConfirmPassword } type="password" placeholder="Password Confirmation" />
												</div>
											</div>
										</div>
										<div className="row text-center justify-content-center">
											<div className="col">
												<button className="btn btn-block btn-outline-success" type="submit">Submit</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SignUp;
