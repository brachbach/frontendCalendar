import React from 'react';

const Event = ({eventParams, onEventClick}) => {
  return (
    <div onClick={function() {onEventClick(eventParams.id)}}>
      <h3>{eventParams.title}</h3>
      <p>{eventParams.description}</p>
      <p>{eventParams.date}</p>
      <p>Start time: {eventParams.startTime}</p>
      <p>End time: {eventParams.endTime}</p>
    </div>
  );
};

export default Event;