import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom'

import { Container, Row, Col } from 'react-bootstrap'

const MASTER_URL = "https://prnkstrserver.herokuapp.com/masters"
const USER_URL = "https://prnkstrserver.herokuapp.com/user"

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
		axios.get( `${ MASTER_URL + '/' + id + '.json' }` ).
			then( ( response ) => {
				this.setState( { users: response.data.users } )
			} )
	}
	render() {
		return (
			<Container>
				{ this.state.users.map( ( user ) => <Link to={ '/controlpanel/' + user.id }><p key={ user.id }>{ user.name }</p></Link> )
				}
			</Container>
		)
	}
}

export default Slaves;
