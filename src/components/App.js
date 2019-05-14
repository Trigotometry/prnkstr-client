import React from 'react';
import './App.css';
import SignUp from './SignUp'
import SignIn from './SignIn'
import SlaveMenu from './SlaveMenu'
import SlaveControlPanel from './SlaveControlPanel'

function App() {
  return (
    <div className="container">
		<SignUp />
    <br/>
    <br/>
		<SignIn />
    <br/>
    <br/>
		<SlaveMenu />
    <br/>
    <br/>
    <SlaveControlPanel />
    </div>
  );
}

export default App;
