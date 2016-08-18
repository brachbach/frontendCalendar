import React, { Component } from 'react';
import './App.css';

class EventCreator extends Component {
  constructor(props) {
    super(props);
    const eventParams = this.props.eventParams;
    this.state = {
      title: eventParams.title,
      description: eventParams.description,
      date: eventParams.date,
      startTime: eventParams.startTime,
      endTime: eventParams.endTime,
      id: eventParams.id
    }

    this.handleTitleChange = e => this.setState({title: e.target.value});
    this.handleDescriptionChange = e => this.setState({description: e.target.value});
    this.handleDateChange = e => this.setState({date: e.target.value});
    this.handleStartTimeChange = e => this.setState({startTime: e.target.value});
    this.handleEndTimeChange = e => this.setState({endTime: e.target.value});

    this.handleEventSubmission = e => {
      e.preventDefault();
      this.props.editEvent(this.state);  //be careful with this line if I add more stuff to the state
    }
  }

  render () {
    const eventParams = this.props.eventParams;

    return (
      <div>
        <h3>Make edits below</h3>
        <form>
          <p>Event title:</p>
          <input type="text" name="title" defaultValue={eventParams.title} onChange={this.handleTitleChange} />
          <p>Event description:</p>
          <input type="text" name="description" defaultValue={eventParams.description} onChange={this.handleDescriptionChange} />
          <p>Event date (yyyy-mm-dd):</p>
          <input type="text" name="date" defaultValue={eventParams.date} onChange={this.handleDateChange} />
          <p>Event start time: (24-hour time, hh-mm)</p>
          <input type="text" name="startTime" defaultValue={eventParams.startTime} onChange={this.handleStartTimeChange} />
          <p>Event end time: (24-hour time, hh-mm)</p>
          <input type="text" name="endTime" defaultValue={eventParams.endTime} onChange={this.handleEndTimeChange} />
          <div>
            <button onClick={this.handleEventSubmission}>Submit</button>
          </div>
        </form>
      </div>
    );
  }

}

export default EventCreator;