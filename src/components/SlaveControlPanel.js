import React, {Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';

const USER_URL = "https://prnkstrserver.herokuapp.com/users"

class UserEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      // id: '',
      // name: '',
      // fill_murray: '',
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
    axios.get(`https://prnkstrserver.herokuapp.com/users/${userId}.json`).then(response => {
      this.setState({
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
    }).catch(err => console.log(err));
  }

  editSlave = async (e) => {
    let userId = this.props.match.params.user
    axios.put( `https://prnkstrserver.herokuapp.com/users/${userId}.json`, {
      "name": this.state.name,
      "fill_murray": this.state.fill_murray,
      "place_cage": this.state.place_cage,
      "custom_header": this.state.custom_header,
      "custom_header_text": this.state.custom_header_text,
      "paragraph_background": this.state.paragraph_background,
      "paragraph_color": this.state.paragraph_color,
      "snap": this.state.snap,
      "master_id": this.state.master_id
  })
    .then(r => console.log(r.status)).catch(e => console.log(e))
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

  render() {
    return (
		<Container>

								<h1>Editing: <strong>{ this.state.name }</strong></h1>
								<Form onSubmit={ this._handleSubmit }>
									<Form.Group>
										<Card>
											<Card.Body>
												<Card.Title>
													<Form.Label>Slave Name</Form.Label>
													<Form.Control type="text" placeholder="Update name..." value={ this.state.name } onChange={ this._handleChangeName } />
												</Card.Title>
											</Card.Body>
										</Card>
									</Form.Group>

									<Form.Group>
										<Card>
											<Card.Body>
												<Form.Check type="checkbox" label="Fill Murray?" value={true} isValid={ this.state.fill_murray } onClick={ this._handleOnClickFillMurray } />
											</Card.Body>
										</Card>
									</Form.Group>

									<Form.Group>
										<Card>
											<Card.Body>
												<Form.Check type="checkbox" label="Place Cage?" value={ this.state.place_cage } onChange={ this._handleChangePlaceCage } />
											</Card.Body>
										</Card>
									</Form.Group>

									<Form.Group>
										<Card>
											<Card.Body>
												<Form.Label>Custom Heading</Form.Label>
												<Form.Check type="checkbox" label="Custom H1 text..." value={ this.state.custom_header } onChange={ this._handleChangeCustomHeader } />
												<Form.Control type="text" placeholder="Custom heading text..." value={ this.state.custom_header_text } onChange={ this._handleChangeCustomHeaderText } />
											</Card.Body>
										</Card>
									</Form.Group>

									<Form.Group>
										<Card>
											<Card.Body>
												<Form.Label>Paragraph Background Hex</Form.Label>
												<Form.Check type="checkbox" label="Change paragraph background color?" value={ this.state.custom_header } onChange={ this._handleChangeParagraphBackground } />
												<Form.Control type="text" placeholder="#A2B3C4 etc..." value={ this.state.paragraph_background } onChange={ this._handleChangeParagraphColor } />
											</Card.Body>
										</Card>
									</Form.Group>

									<Form.Group>
										<Card>
											<Card.Body>
												<Form.Label>Paragraph Text Color #Hex</Form.Label>
												<Form.Check type="checkbox" label="Change paragraph text color?" value={ this.state.custom_header } onChange={ this._handleInputChange } />
												<Form.Control type="text" placeholder="#D4E5F6 etc..." value={ this.state.paragraph_color } onChange={ this._handleInputChange } />
											</Card.Body>
										</Card>
									</Form.Group>

									<Form.Group>
										<Card>
											<Card.Body>
												<Form.Check type="checkbox" label="Chrome 'Aww Snap' Page?" value={ this.state.snap } onChange={ this._handleChangeSnap } />
											</Card.Body>
										</Card>
									</Form.Group>

									<Button variant="primary" type="submit">
										Submit
									</Button>
								</Form>

							</Container>

	);
  }
}

export default UserEdit;
