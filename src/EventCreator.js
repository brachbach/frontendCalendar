import React, { Component } from 'react';
import './App.css';

class EventCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      date: '',
      startTime: '',
      endTime: ''
    }

    this.handleTitleChange = e => this.setState({title: e.target.value});
    this.handleDescriptionChange = e => this.setState({description: e.target.value});
    this.handleDateChange = e => this.setState({date: e.target.value});
    this.handleStartTimeChange = e => this.setState({startTime: e.target.value});
    this.handleEndTimeChange = e => this.setState({endTime: e.target.value});

    this.handleEventSubmission = e => {
      e.preventDefault();
      this.props.createEvent(this.state);  //be careful with this line if I add more stuff to the state
    }
  }

  render () {
    return (
      <form>
        <p>Event title:</p>
        <input type="text" name="title" onChange={this.handleTitleChange} />
        <p>Event description:</p>
        <input type="text" name="description" onChange={this.handleDescriptionChange} />
        <p>Event date (mm-dd-yyyy):</p>
        <input type="text" name="date" onChange={this.handleDateChange} />
        <p>Event start time: (24-hour time, hh-mm)</p>
        <input type="text" name="startTime" onChange={this.handleStartTimeChange} />
        <p>Event end time: (24-hour time, hh-mm)</p>
        <input type="text" name="endTime" onChange={this.handleEndTimeChange} />
        <button onClick={this.handleEventSubmission}>Submit</button>
      </form>
    );
  }

}

export default EventCreator;