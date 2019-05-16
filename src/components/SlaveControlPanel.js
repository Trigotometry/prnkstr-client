import React, {Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const USER_URL = "https://prnkstrserver.herokuapp.com/users"

class UserEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {

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
    axios.put(`https://prnkstrserver.herokuapp.com/users/${userId}.json`, {
      "name": this.state.name,
      "fill_murray": this.state.fill_murray,
      "place_cage": this.state.place_cage,
      "custom_header": this.state.custom_header,
      "custom_header_text": this.state.custom_header_text,
      "paragraph_background": this.state.paragraph_background,
      "paragraph_color": this.state.paragraph_color,
      "snap": this.state.snap,
      "master_id": this.state.master_id
    }).then(r => console.log(r.status)).catch(e => console.log(e))
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
      <div>

      <h1>Edit {this.state.name}</h1>
      <form onSubmit={this._handleSubmit
      } > <div className="form-group">
        <label>Name</label>
        <input type="text" name="name" value={this.state.name} onChange={this._handleChangeName} className="form-control"/>
      </div>
        <div className="form-group">
          <label>Fill Murray</label>
          <textarea type="text" name="fill_murray" value={this.state.fill_murray} onChange={this._handleChangeFillMurray} className="form-control"/>
        </div>
        <div className="form-group">
          <label>Place Cage</label>
          <input type="text" name="place_cage" value={this.state.place_cage} onChange={this._handleChangePlaceCage} className="form-control"/>
        </div>
        <div className="form-group">
          <label>Custom Header</label>
          <textarea type="text" name="custom_header" value={this.state.custom_header} onChange={this._handleChangeCustomHeader} className="form-control"/>
        </div>
        <div className="form-group">
          <label>Custom Header Text</label>
          <input type="text" name="custom_header_text" value={this.state.custom_header_text} onChange={this._handleChangeCustomHeaderText} className="form-control"/>
        </div>
        <div className="form-group">
          <label>Paragraph Background</label>
          <textarea type="text" name="paragraph_background" value={this.state.paragraph_background} onChange={this._handleChangeParagraphBackground} className="form-control"/>
        </div>
        <div className="form-group">
          <label>Paragraph Color</label>
          <textarea type="text" name="paragraph_color" value={this.state.paragraph_color} onChange={this._handleChangeParagraphColor} className="form-control"/>
        </div>
        <div className="form-group">
          <label>Snap</label>
          <textarea type="text" name="snap" value={this.state.snap} onChange={this._handleChangeSnap} className="form-control"/>
        </div>
        <div className="form-group">
          <label>Master</label>
          <textarea type="text" name="content" value={this.state.master_id} onChange={this._handleChangeMasterId} className="form-control"/>
        </div>
        <div className="btn-group">
          <input type="submit" className="btn btn-dark" value="Update"/>
          <button type="button" onClick={this.handleCancel} className="btn btn-secondary">Cancel</button>
        </div>
      </form>
    </div>
  );
}
}

export default UserEdit
