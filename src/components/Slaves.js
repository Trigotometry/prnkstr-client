import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Link } from 'react-router-dom';

const MASTER_URL = "https://prnkstrserver.herokuapp.com/masters";

class Slaves extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			masterId: props.match.params.master,
			users: []
		};
		this.getSlaves( this.state.masterId );
	}
	getSlaves = ( id ) => {
		axios.get( `${ MASTER_URL}/${id}.json` )
			.then( ( response ) => {
				this.setState( { users: response.data.users } )
			} )
	}
	render() {
		return (
			<div className="container">
			  <div className="row justify-content-center">
					<div className="col-lg-4 col-md-6">
						<img className="img-fluid py-4" src={ process.env.PUBLIC_URL + '/prnkstr_long_logo.svg' } />
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-4 col-md-6 text-center">
						<h2 className="mb-4">Current Connections</h2>
					</div>
				</div>
				<div className="row justify-content-center">
					{ this.state.users.map( function( user ) {
						return(
							<Link to={ `/controlpanel/${user.id}`} className="text-danger" key={ user.id }>
								<div className="col" style={{flexGrow: 0}}>
									<div className="card border-danger mb-4">
										<div className="card-body">
											<p className="card-text">{ user.name }</p>
										</div>
									</div>
								</div>
							</Link>
						)
					} ) }
				</div>
			</div>
		)
	}
}

export default Slaves;
