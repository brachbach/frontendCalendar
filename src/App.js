import React, { Component } from 'react';
import './App.css';
import EventCreator from './EventCreator.js';
import EventEditor from './EventEditor.js';
import Events from './Events.js';
import Calendar from './Calendar.js';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      events: [], 
      currentEventId: 0,
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
        <h3>This week's events (click on an event to edit):</h3>
        <Calendar eventList={this.state.events} onEventClick={this.handleEventClick}/>
        <h3>All events (click on an event to edit): </h3>
        <Events eventList={this.state.events} onEventClick={this.handleEventClick}/>
        <button onClick={this.handleCreateEventClick} id="createEvent">Create event</button>
        <hr />
        {createEditView}
      </div>
    );
  }

  createEvent(event) {
    event.id = this.state.currentEventId;
    this.setState({
      events: this.state.events.concat(event),
      currentEventId: this.state.currentEventId + 1,
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

  handleEventClick (id) {
    // this.setState({
    //   creating: false,
    //   editing: false,
    // });
    // this.render();

    this.setState({
      creating: false,
      editing: true,
      eventToEdit: id
    });
    this.render();
  }

}

export default App;
