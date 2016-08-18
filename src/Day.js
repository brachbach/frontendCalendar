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
  const sortedEvents = eventsToDisplay.sort((eventA, eventB) => {
    const timeNumA = Number(`${eventA.startTime.slice(0,2)}${eventA.startTime.slice(3,5)}`);
    const timeNumB = Number(`${eventB.startTime.slice(0,2)}${eventB.startTime.slice(3,5)}`);
    return timeNumA - timeNumB;
  })
  const formattedEvents = sortedEvents.map(event => <Event eventParams={event} onEventClick={onEventClick} idx="0" />)
  return (
    <div className="day">
      <h4>{dayOfWeek}</h4>
      <h4>{dateString}</h4>
      {formattedEvents}
    </div>
  )
}

export default Day;