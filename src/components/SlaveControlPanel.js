import React, {Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const USER_URL = "https://prnkstrserver.herokuapp.com/users"

class UserEdit extends Component {
	constructor(props) {
	super(props);
	this.state = {
		user: [],
		// id: '',
		// name: '',
		fill_murray: false,
		// place_cage: '',
		// custom_header: '',
		// custom_header_text:'',
		// paragraph_background: '',
		// paragraph_color:'',
		// snap: '',
		// master_id: ''
	};

	this._handleChangeName = this._handleChangeName.bind(this);
	this._handleChangeFillMurray = this._handleChangeFillMurray.bind(this);
	this._handleChangePlaceCage = this._handleChangePlaceCage.bind(this);
	this._handleChangeCustomHeader = this._handleChangeCustomHeader.bind(this);
	this._handleChangeCustomHeaderText = this._handleChangeCustomHeaderText.bind(this);
	this._handleChangeParagraphBackground = this._handleChangeParagraphBackground.bind(this);
	this._handleChangeParagraphColor = this._handleChangeParagraphColor.bind(this);
	this._handleChangeSnap = this._handleChangeSnap.bind(this);
	this._handleChangeMasterId = this._handleChangeMasterId.bind(this);
	this.editSlave = this.editSlave.bind(this);
	}

	componentDidMount() {
		this.fetchSlave();
	}

	fetchSlave() {
	let userId = this.props.match.params.user;
	axios
		.get(`https://prnkstrserver.herokuapp.com/users/${ userId }.json`)
		.then(response => {
			this.setState( {
				name: response.data.name,
				fill_murray: response.data.fill_murray,
				place_cage: response.data.place_cage,
				custom_header: response.data.custom_header,
				custom_header_text: response.data.custom_header_text,
				paragraph_background: response.data.paragraph_background,
				paragraph_color: response.data.paragraph_color,
				snap: response.data.snap,
				master_id: response.data.master_id
			}, () => {
			console.log(this.state);
			});
		})
		.catch(err => console.log(err));
	}

	editSlave = async (e) => {
	let userId = this.props.match.params.user
	axios
		.put( `https://prnkstrserver.herokuapp.com/users/${userId}.json`, {
			"name": this.state.name,
			"fill_murray": this.state.fill_murray,
			"place_cage": this.state.place_cage,
			"custom_header": this.state.custom_header,
			"custom_header_text": this.state.custom_header_text,
			"paragraph_background": this.state.paragraph_background,
			"paragraph_color": this.state.paragraph_color,
			"snap": this.state.snap,
			"master_id": this.state.master_id
			} )
		.then( r => console.log(r.status) ).catch( e => console.log(e) )
	}

	_handleSubmit = async e => {
		e.preventDefault();
		this.editSlave();
	};

	_handleChangeName(e) {
		this.setState({name: e.target.value});
	}
	_handleChangeFillMurray(e) {
		this.setState({fill_murray: e.target.value});
	}
	_handleChangePlaceCage(e) {
		this.setState({place_cage: e.target.value});
	}
	_handleChangeCustomHeader(e) {
		this.setState({custom_header: e.target.value});
	}
	_handleChangeCustomHeaderText(e) {
		this.setState({custom_header_text: e.target.value});
	}
	_handleChangeParagraphBackground(e) {
		this.setState({paragraph_background: e.target.value});
	}
	_handleChangeParagraphColor(e) {
		this.setState({paragraph_color: e.target.value});
	}
	_handleChangeSnap(e) {
		this.setState({snap: e.target.value});
	}
	_handleChangeMasterId(e) {
		this.setState({master_id: e.target.value});
	}

	_toggleFillMurray = () => {
		this.setState( {
			fill_murray: !this.state.fill_murray
		});
	}
	_toggleCustomHeader = () => {
		this.setState( {
			place_cage: !this.state.place_cage
		})
	}
	_toggleCustomHeader = () => {
		this.setState( {
			custom_header: !this.state.custom_header
		})
	}
	_toggleSnap = () => {
		this.setState( {
			snap: !this.state.snap
		})
	}

	render() {
		return (
			<div className="container">
				<h1>Edit { this.state.name }</h1>
				<form onSubmit={ this._handleSubmit }>
					<div className="">
						<label>Name</label>
						<input className="" type="text" name="name" value={ this.state.name } onChange={ this._handleChangeName } />
					</div>
					<div className="">
						<input className="" type="checkbox" onChange={ this._toggleFillMurray } value={ this.state.fill_murray } checked={ this.state.fill_murray } />
						<label className="">Fill Murray?</label>
					</div>
					<div className="">
						<input className="" type="checkbox" onChange={ this._togglePlaceCage } value={ this.state.place_cage } checked={ this.state.place_cage } />
						<label className="">Place Cage</label>
					</div>
					<div className="">
						<input className="" type="checkbox" onChange={ this._toggleCustomHeader } value={ this.state.custom_header } checked={ this.state.custom_header } />
						<label className="">Custom Header</label>
					</div>
					<div className="">
						<label>Custom Header Text</label>
						<input className="" type="text" name="custom_header_text" value={ this.state.custom_header_text } onChange={ this._handleChangeCustomHeaderText } />
					</div>
					<div className="">
						<label>Paragraph Background</label>
						<textarea className="" type="text" name="paragraph_background" value={ this.state.paragraph_background } onChange={ this._handleChangeParagraphBackground } />
					</div>
					<div className="">
						<label>Paragraph Color</label>
						<textarea className="" type="text" name="paragraph_color" value={ this.state.paragraph_color } onChange={ this._handleChangeParagraphColor } />
					</div>
					<div className="">
						<input className="" type="checkbox" onChange={ this._toggleSnap } value={ this.state.snap } checked={ this.state.snap } />
						<label className="">Snap</label>
					</div>
					<div className="btn-group">
						<input type="submit" className="" value="Update"/>
						<button className="btn btn-secondary" type="button" onClick={ this.handleCancel }>Cancel</button>
					</div>
				</form>
			</div>

		);
	}
}

export default UserEdit;
