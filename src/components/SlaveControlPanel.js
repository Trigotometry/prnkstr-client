import React, { Component } from 'react';
import axios from 'axios';

const SERVER_URL = "https://prnkstrserver.herokuapp.com/users"

class UserEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      fill_murray: false,
      place_cage: false,
      custom_header: false,
      custom_header_text: '',
      paragraph_background: '',
      paragraph_color: '',
      snap: false,
      master_id: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  getSlave(id) {
    axios.get(`${SERVER_URL}/id/edit`)
      .then((response) => {
        this.setState(response.data)
      })
      .catch(error => console.log('error', error));
  }

  handleSubmit(event) {
    event.preventDefault();
    axios({ method: 'patch', url: `${SERVER_URL}/${this.state.id}`, data: this.state})
      .then(() => {
        this.props.history.push(`/slaves/${this.state.id}`);
      })
      .catch(error => console.log('error', error));
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleCancel() {
    this.props.history.push(`/slaves/${this.state.id}`);
  }

  render() {
    return (
      <div>
        <h1>Edit {this.state.name}</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control" />
          </div>
          <div className="form-group">
            <label>Fill Murray</label>
            <textarea name="content" rows="5" value={this.state.fill_murray} onChange={this.handleChange} className="form-control" />
          </div>
          <div className="form-group">
            <label>Place Cage</label>
            <input type="text" name="name" value={this.state.place_cage} onChange={this.handleChange} className="form-control" />
          </div>
          <div className="form-group">
            <label>Custom Header</label>
            <textarea name="content" rows="5" value={this.state.custom_header} onChange={this.handleChange} className="form-control" />
          </div>
          <div className="form-group">
            <label>Custom Header Text</label>
            <input type="text" name="custom_header_text" value={this.state.custom_header_text} onChange={this.handleChange} className="form-control" />
          </div>
          <div className="form-group">
            <label>Paragraph Background</label>
            <textarea name="content" rows="5" value={this.state.paragraph_background} onChange={this.handleChange} className="form-control" />
          </div>
          <div className="form-group">
            <label>Paragraph Color</label>
            <textarea name="content" rows="5" value={this.state.paragraph_color} onChange={this.handleChange} className="form-control" />
          </div>
          <div className="form-group">
            <label>Paragraph Snap</label>
            <textarea name="content" rows="5" value={this.state.snap} onChange={this.handleChange} className="form-control" />
          </div>
          <div className="form-group">
            <label>Master</label>
            <textarea name="content" rows="5" value={this.state.master_id} onChange={this.handleChange} className="form-control" />
          </div>
          <div className="btn-group">
            <button type="submit" className="btn btn-dark">Update</button>
            <button type="button" onClick={this.handleCancel} className="btn btn-secondary">Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

export default UserEdit;
