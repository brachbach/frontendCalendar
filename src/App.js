import React, { Component } from 'react';
import './App.css';
import EventCreator from './EventCreator.js';
import EventEditor from './EventEditor.js';
import Events from './Events.js';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      events: [], 
      creating: false,
      editing: false,
      eventToEdit: undefined
    };
    this.createEvent = this.createEvent.bind(this);
    this.editEvent = this.editEvent.bind(this);
    this.handleCreateEventClick = this.handleCreateEventClick.bind(this);
    this.handleEventClick = this.handleEventClick.bind(this);
  }

  render() {
    let createEditView = '';
    if (this.state.creating) {
      createEditView = <EventCreator createEvent={this.createEvent} />;
    }
    if (this.state.editing) {
      createEditView = <EventEditor eventParams={this.state.events[this.state.eventToEdit]} editEvent={this.editEvent} />;
    }

    return (
      <div className="App">
        <p>To edit an event, click on it</p>
        <button onClick={this.handleCreateEventClick}>Create event</button>
        <Events eventList={this.state.events} onEventClick={this.handleEventClick}/>
        <hr />
        {createEditView}
      </div>
    );
  }

  createEvent(event) {
    this.setState({
      events: this.state.events.concat(event),
      creating: false
    });
    this.render();
  }

  editEvent(event) {
    const newEvents = this.state.events.slice(0);
    newEvents[this.state.eventToEdit] = event;
    this.setState({
      events: newEvents,
      editing: false
    })
    this.render();
  }

  handleCreateEventClick (e) {
    this.setState({
      creating: true,
      editing: false
    });
    this.render();
  }

  handleEventClick (key) {
    this.setState({
      creating: false,
      editing: true,
      eventToEdit: key
    });
    this.render();
  }

}

export default App;
