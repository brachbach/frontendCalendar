import React from 'react';
import Event from './Event.js'

const Day = ({date, eventList, dayOfWeek, onEventClick}) => {
  const year = String(date.getFullYear());
  let month = String(date.getMonth());
  if (month.length === 1) {
    month = '0' + month;
  }
  let day = String(date.getDate());
  if (day.length === 1) {
    day = '0' + day;
  }
  const dateString = `${year}-${month}-${day}`;

  const eventsToDisplay = eventList.filter(event => event.date === dateString);
  const formattedEvents = eventsToDisplay.map(event => <Event eventParams={event} onEventClick={onEventClick} idx="0" />)
  return (
    <div className="day">
      <h4>{dayOfWeek}</h4>
      <h4>{dateString}</h4>
      {formattedEvents}
    </div>
  )
}

export default Day;