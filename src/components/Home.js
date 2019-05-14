import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import SignUp from './SignUp'
import SignIn from './SignIn'
import Menu from './SlaveMenu'
import SlaveControlPanel from './SlaveControlPanel'
import { Redirect } from 'react-router-dom'

class Home extends Component {
  constructor(){
    super();
    this.state = {
      masterName: '',
      password: '',
      confirmPassword: '',
    }
  }
  render() {
    return (
    <div>
    <h1> PRNKSTR </h1>
    <SignIn />
    </div>

  )

  }
}

export default Home;

// if ( this.state.SignIn ) {
//  return < Redirect to= '/SignIn' />
// }
// if ( this.state.SignUp ) {
//   return < Redirect to= '/SignUp' />
// }
// if ( this.state.Menu ) {
//   return < Redirect to= '/Menu' />
// }
// if ( this.state.ControlPanel ) {
//   return < Redirect to= '/ControlPanel' />
// } else {
// return  <h1> Nothing to display 404 </h1>
// }
