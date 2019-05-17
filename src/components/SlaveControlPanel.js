import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import {Link} from "react-router-dom";

const USER_URL = "https://prnkstrserver.herokuapp.com/users"

class UserEdit extends Component {
	constructor(props) {
	super(props);
	this.state = {
		// user: [],
		// id: '',
		// name: '',
		// fill_murray: false,
		// place_cage: '',
		// custom_header: '',
		// custom_header_text:'',
		// paragraph_background: '',
		// paragraph_color:'',
		// snap: '',
		// master_id: ''
	};

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
				stranger_things: response.data.stranger_things, //tf
				page_flip: response.data.page_flip, //tf
				otherside: response.data.otherside_mode, //tf
				marquee: response.data.marquee, //tf
				marquee_element: response.data.marquee_element,
				marquee_speed: response.data.marquee_speed,
				unicorn_mode: response.data.unicorn_mode, //tf
				word_swapper: response.data.word_swapper, //tf
				existing_word: response.data.existing_word,
				new_word: response.data.new_word,
				hidden_video: response.data.hidden_video,
				hidden_video_url: response.data.hidden_video_url,
				hidden_video_element: response.data.hidden_video_element,
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
			"stranger_things": this.state.stranger_things,
			"page_flip": this.state.page_flip,
			"otherside": this.state.otherside_mode,
			"marquee": this.state.marquee,
			"marquee_element": this.state.marquee_element,
			"marquee_speed": this.state.marquee_speed,
			"unicorn_mode": this.state.unicorn_mode,
			"word_swapper": this.state.word_swapper,
			"existing_word": this.state.existing_word,
			"new_word": this.state.new_word,
			"hidden_video": this.state.hidden_video,
			"hidden_video_url": this.state.hidden_video_url,
			"hidden_video_element": this.state.hidden_video_element,
			"master_id": this.state.master_id
			} )
		.then( r => console.log(r.status) ).catch( e => console.log(e) )
	}

	_handleSubmit = async e => {
		e.preventDefault();
		this.editSlave();
	};

	_handleChangeName = (e) => {
		this.setState({name: e.target.value});
	}
	_handleChangeFillMurray = (e) => {
		this.setState({fill_murray: e.target.value});
	}
	_handleChangePlaceCage = (e) => {
		this.setState({place_cage: e.target.value});
	}
	_handleChangeCustomHeader = (e) => {
		this.setState({custom_header: e.target.value});
	}
	_handleChangeCustomHeaderText = (e) => {
		this.setState({custom_header_text: e.target.value});
	}
	_handleChangeParagraphBackground = (e) => {
		this.setState({paragraph_background: e.target.value});
	}
	_handleChangeParagraphColor = (e) => {
		this.setState({paragraph_color: e.target.value});
	}
	_handleChangeSnap = (e) => {
		this.setState({snap: e.target.value});
	}
	_handleChangeStrangerThings = (e) => {
		this.setState({stranger_things: e.target.value});
	}
	_handleChangePageFlip = (e) => {
		this.setState({page_flip: e.target.value});
	}
	_handleChangeOtherside = (e) => {
		this.setState({otherside: e.target.value});
	}
	_handleChangeMarquee = (e) => {
		this.setState({marquee: e.target.value});
	}
	_handleChangeMarqueeElement = (e) => {
		this.setState({marquee_element: e.target.value});
	}
	_handleChangeMarqueeSpeed = (e) => {
		this.setState({marquee_speed: e.target.value});
	}
	_handleChangeUnicornMode = (e) => {
		this.setState({unicorn_mode: e.target.value});
	}
	_handleChangeWordSwapper = (e) => {
		this.setState({word_swapper: e.target.value});
	}
  _handleChangeExistingWord = (e) => {
    this.setState({existing_word: e.target.value});
  }
	_handleChangeNewWord = (e) => {
		this.setState({new_word: e.target.value});
	}
	_handleChangeHiddenVideo = (e) => {
		this.setState({hidden_video: e.target.value});
	}
	_handleChangeHiddenVideoUrl = (e) => {
		this.setState({hidden_video_url: e.target.value});
	}
	_handleChangeHiddenVideoElement = (e) => {
		this.setState({hidden_video_element: e.target.value});
	}
	_handleChangeMasterId = (e) => {
		this.setState({master_id: e.target.value});
	}

	_toggleFillMurray = () => {
		this.setState( {
			fill_murray: !this.state.fill_murray
		});
	}
	_togglePlaceCage = () => {
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
	_toggleStrangerThings = () => {
		this.setState( {
			stranger_things: !this.state.stranger_things
		});
	}
	_togglePageFlip = () => {
		this.setState( {
			page_flip: !this.state.page_flip
		})
	}
	_toggleOtherside = () => {
		this.setState( {
			otherside: !this.state.otherside
		})
	}
	_toggleMarquee = () => {
		this.setState( {
			marquee: !this.state.marquee
		})
	}
	_toggleUnicornMode = () => {
		this.setState( {
			unicorn_mode: !this.state.unicorn_mode
		})
	}
	_toggleWordSwapper = () => {
		this.setState( {
			word_swapper: !this.state.word_swapper
		})
	}
	_toggleHiddenVideo = () => {
		this.setState( {
			hidden_video: !this.state.hidden_video
		})
	}

	render() {
		return (
   <div className="BackdropColor">
		 <div className="row justify-content-center">
			 <div className="col-lg-4 col-md-6">
				 <img className="img-fluid py-4" src={ process.env.PUBLIC_URL + '/prnkstr_long_white.svg' } />
			 </div>
		 </div>


     <div className="container">


       <form onSubmit={ this._handleSubmit } className="gridme">
         <div className="postItlrg postIt" id="nameBox" >
           <label>Now Editing:</label>
           <input className="nameInput" type="text" name="name" value={ this.state.name } onChange={ this._handleChangeName } />
         </div>
         <div className="postItlrg postIt" id="fillMurrayBox">
           <img src="https://www.fillmurray.com/80/155" />
           <h4 className="padding10px">Fill Murray?</h4>
           <input type="checkbox" onChange={ this._toggleFillMurray } value={ this.state.fill_murray } checked={ this.state.fill_murray } className="inlineBlock" />


         </div>
         <div className="postItlrg postIt" id="placeCageBox">
           <img src="https://www.placecage.com/80/155" />
           <h4 className="padding10px">Place Cage?</h4>
           <input type="checkbox" onChange={ this._togglePlaceCage } value={ this.state.place_cage } checked={ this.state.place_cage } />
         </div>

         <div className="postItlrg postIt" id="customHeaderBox">
           <input  type="checkbox" onChange={ this._toggleCustomHeader } value={ this.state.custom_header } checked={ this.state.custom_header } />
           <label>Custom Header</label>
           <h6>Custom Header Text</h6>
           <input type="text" name="custom_header_text" value={ this.state.custom_header_text } onChange={ this._handleChangeCustomHeaderText } />
         </div>

         <div className="postItlrg postIt" id="customBackgroundBox">

           <input type="checkbox" name="paragraph_background" value={ this.state.paragraph_background } onChange={ this._handleChangeParagraphBackground } />
           <label>Paragraph Background</label>
           <h6>Paragraph Color</h6>
           <input className="" type="text" name="paragraph_color" value={ this.state.paragraph_color } onChange={ this._handleChangeParagraphColor } />
         </div>

         <div className="postItlrg postIt" id="">
           <h5>Stranger Things</h5>
           <input type="checkbox" name="paragraph_background" value={this.state.stranger_things} onChange={ this._toggleStrangerThings } checked={ this.state.stranger_things } />
         </div>

         <div className="postItsml postIt" id="">
           <h5>Page Flip</h5>
           <input type="checkbox" name="paragraph_background" value={this.state.page_flip} onChange={ this._togglePageFlip } checked={ this.state.page_flip } />
         </div>
         <div className="postItlrg postIt" id="">
           <h5>Otherside Mode</h5>
           <input type="checkbox" name="paragraph_background" value={this.state.otherside} onChange={ this._toggleOtherside } checked={ this.state.otherside } />
         </div>

         <div className="postItsml postIt" id="">
           <h5>Marquee</h5>
           <input type="checkbox" name="paragraph_background" value={this.state.marquee} onChange={ this._toggleMarquee } checked={ this.state.marquee }/>
           <h6>Marquee Element</h6>
           <input type="text" name="custom_header_text" value={ this.state.marquee_element } onChange={ this._handleChangeMarqueeElement} />
           <h6>Marquee Speed</h6>
           <input type="text" name="custom_header_text" value={ this.state.marquee_speed } onChange={ this._handleChangeMarqueeSpeed } />
         </div>

         <div className="postItlrg postIt" id="">
           <h5>Unicorn Mode</h5>
           <input type="checkbox" name="paragraph_background" value={this.state.unicorn_mode} onChange={ this._toggleUnicornMode } checked={ this.state.unicorn_mode }/>
         </div>

         <div className="postItsml postIt" id="">
           <h5>Word Swapper</h5>
           <input type="checkbox" name="paragraph_background" value={this.state.word_swapper} onChange={ this._toggleWordSwapper } checked={ this.state.word_swapper }/>
           <h6>Existing Word</h6>
           <input type="text" name="custom_header_text" value={ this.state.existing_word } onChange={ this._handleChangeExistingWord } />
           <h6>New Word</h6>
           <input type="text" name="custom_header_text" value={ this.state.new_word } onChange={ this._handleChangeNewWord } />
         </div>

         <div className="postItlrg postIt" id="">
           <h5>Hidden Video</h5>
           <input type="checkbox" name="paragraph_background" value={this.state.hidden_video} onChange={ this._toggleHiddenVideo } checked={ this.state.hidden_video }/>
           <h6>Hidden Video URL</h6>
           <input type="text" name="custom_header_text" value={ this.state.hidden_video_url } onChange={ this._handleChangeHiddenVideoUrl } />
           <h6>Hidden Video Element Select</h6>
           <input type="text" name="custom_header_text" value={ this.state.hidden_video_element } onChange={ this._handleChangeHiddenVideoElement } />
         </div>


					<div className="postItlrg postIt" id="awwSnapBox">
						<input className="" type="checkbox" onChange={ this._toggleSnap } value={ this.state.snap } checked={ this.state.snap } />
						<label className="">Snap</label>
					</div>

					<div className="postItsml postIt" id="submitButtonBox">
						<input type="submit" className="" value="Update" id="submitButton"/>
						<button className="btn btn-secondary" type="button" onClick={ this.handleCancel }>Cancel</button>
					</div>
				</form>
			</div>
			</div>

		);
	}
}

export default UserEdit
