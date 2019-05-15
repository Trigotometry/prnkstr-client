import React, { Component } from 'react';
import axios from 'axios';

const USER_URL = "https://prnkstrserver.herokuapp.com/users"

class UserEdit extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      id: '',
      name: '',
      fill_murray: '',
      place_cage: '',
      custom_header: '',
      custom_header_text:'',
      paragraph_background: '',
      paragraph_color:'',
      snap: '',
      master_id: ''
    };

    this._handleInputChange = this._handleInputChange.bind(this);
    this.editSlave = this.editSlave.bind(this);
  }

  componentDidMount(){
    this.fetchSlave();
  }

  fetchSlave(){
      let userId = this.props.match.params.user;
      axios.get(`https://prnkstrserver.herokuapp.com/users/${userId}.json`)
      .then(response => {
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
      })
      .catch(err => console.log(err));
      }

      editSlave(e) {
        axios.put(`https://prnkstrserver.herokuapp.com/users/${this.state.id}.json`, {name: e.name, fill_murray: e.fill_murray, place_cage: e.place_cage, custom_header: e.custom_header, custom_header_text: e.custom_header_text, paragraph_background: e.paragraph_background, paragraph_color: e.paragraph_color, snap: e.snap, master_id: e.master_id}).then((results) => {
          console.log('results data', results);
          this.setState( {users: [...this.state.users, results.data]  });
        }).catch(err => console.log(err));
      }

      // editSlave(fetchUser){
      //   axios.request({
      //     method:'put',
      //     url:`https://prnkstrserver.herokuapp.com/users/${this.state.id}.json`,
      //     data: fetchUser
      //   }).then(response => {
      //     this.props.history.push('/slaves/:master');
      //   }).catch(err => console.log(err));
      // }

  //     onSubmit(e){
  //   const fetchUser = {
  //     id: this.target.id.value,
  //     name: this.target.name.value,
  //     fill_murray: this.target.fill_murray.value,
  //     place_cage: this.target.place_cage.value,
  //     custom_header: this.target.custom_header.value,
  //     custom_header_text:this.target.custom_header_text.value,
  //     paragraph_background: this.target.paragraph_background.value,
  //     paragraph_color:this.target.paragraph_color.value,
  //     snap: this.target.snap.value,
  //     master_id:this.target.master_id.value
  //   }
  //   this.editSlave(fetchUser);
  //   e.preventDefault();
  // }


  // _handleSubmit(e) {
  //   e.preventDefault();
  //   this.setState({
      // name: '',
      // fill_murray: false,
      // place_cage: false,
      // custom_header: false,
      // custom_header_text: '',
      // paragraph_background: '',
      // paragraph_color: '',
      // snap: false,
      // master_id: ''
  //  });
  // }

  _handleSubmit(e){
    e.preventDefault();
    this.setState({
      name: e.target.name.value,
      fill_murray: e.target.fill_murray.value,
      place_cage: e.target.name.value,
      custom_header: e.target.custom_header.value,
      custom_header_text: e.target.custom_header_text.value,
      paragraph_background: e.target.paragraph_background.value,
      paragraph_color: e.target.paragraph_color.value,
      snap: e.target.snap.value,
      master_id: e.target.master_id.value
    });
  }

  _handleInputChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }


  render() {
    return (
      <div>
        <h1>Edit {this.state.name}</h1>
        <form onSubmit={this._handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name"  value={this.state.name} onChange={this._handleInputChange} className="form-control" />
          </div>
          <div className="form-group">
            <label>Fill Murray</label>
            <textarea type="text" name="fill_murray"  value={this.state.fill_murray} onChange={this._handleInputChange} className="form-control" />
          </div>
          <div className="form-group">
            <label>Place Cage</label>
            <input type="text" name="place_cage"  value={this.state.place_cage} onChange={this._handleInputChange} className="form-control" />
          </div>
          <div className="form-group">
            <label>Custom Header</label>
            <textarea type="text" name="custom_header"  value={this.state.custom_header} onChange={this._handleInputChange} className="form-control" />
          </div>
          <div className="form-group">
            <label>Custom Header Text</label>
            <input type="text" name="custom_header_text" value={this.state.custom_header_text} onChange={this._handleInputChange} className="form-control" />
          </div>
          <div className="form-group">
            <label>Paragraph Background</label>
            <textarea type="text" name="paragraph_background"  value={this.state.paragraph_background} onChange={this._handleInputChange} className="form-control" />
          </div>
          <div className="form-group">
            <label>Paragraph Color</label>
            <textarea type="text" name="paragraph_color"  value={this.state.paragraph_color} onChange={this._handleInputChange} className="form-control" />
          </div>
          <div className="form-group">
            <label>Paragraph Snap</label>
            <textarea type="text" name="snap"  value={this.state.snap} onChange={this._handleInputChange} className="form-control" />
          </div>
          <div className="form-group">
            <label>Master</label>
            <textarea type="text" name="content"  value={this.state.master_id} onChange={this._handleInputChange} className="form-control" />
          </div>
          <div className="btn-group">
            <button type="submit" className="btn btn-dark" value="Save">Update</button>
            <button type="button" onClick={this.handleCancel} className="btn btn-secondary">Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

export default UserEdit;
