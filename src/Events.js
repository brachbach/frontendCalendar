import React from 'react';
import Event from './Event.js'

const Events = ({eventList, onEventClick}) => {
  const eventsToRender = eventList.map((event, idx) => <Event eventParams={event} onEventClick={onEventClick} idx={idx}/>);

  return (
    <div>
      {eventsToRender}
    </div>
  )
};

export default Events;