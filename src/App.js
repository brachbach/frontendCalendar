import React, { Component } from 'react';
import './App.css';
import EventCreator from './EventCreator.js';

class App extends Component {
  constructor (props) {
    super(props);
    this.createEvent = event => {
      console.log(event);
    }
  }

  render() {
    return (
      <div className="App">
        <EventCreator createEvent={this.createEvent}/>
      </div>
    );
  }

}

export default App;
