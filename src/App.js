import React, { Component } from 'react';
import './App.css';
import EventCreator from './EventCreator.js';
import Events from './Events.js';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {events: []};
    this.createEvent = this.createEvent.bind(this);
  }

  render() {
    return (
      <div className="App">
        <Events eventList={this.state.events} />
        <hr />
        <EventCreator createEvent={this.createEvent} />
      </div>
    );
  }

  createEvent(event) {
    this.setState({events: this.state.events.concat(event)});
    console.log('set events');
    this.render();
  }

}

export default App;
