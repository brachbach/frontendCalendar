import React from 'react';
import Event from './Event.js'

const Events = ({eventList}) => {
  const eventsToRender = eventList.map(event => <Event eventParams={event} />);

  return (
    <div>
      {eventsToRender}
    </div>
  )
};

export default Events;