import React from 'react';
import Day from './Day';

const Calendar = ({eventList, onEventClick}) => {
  const currentDate = new Date();
  let previousMon = currentDate;
  while (!(previousMon.getDay() === 0)) {
    previousMon = new Date(previousMon.getFullYear(), previousMon.getMonth(), previousMon.getDate() - 1);
  }

  return (
    <div>
      <Day onEventClick={onEventClick} date={previousMon} eventList={eventList} dayOfWeek="Monday"/> 
      <Day onEventClick={onEventClick} date={new Date(previousMon.getFullYear(), previousMon.getMonth(), previousMon.getDate() + 1)} eventList={eventList} dayOfWeek="Tuesday"/>
      <Day onEventClick={onEventClick} date={new Date(previousMon.getFullYear(), previousMon.getMonth(), previousMon.getDate() + 2)} eventList={eventList} dayOfWeek="Wednesday"/>
      <Day onEventClick={onEventClick} date={new Date(previousMon.getFullYear(), previousMon.getMonth(), previousMon.getDate() + 3)} eventList={eventList} dayOfWeek="Thursday"/>
      <Day onEventClick={onEventClick} date={new Date(previousMon.getFullYear(), previousMon.getMonth(), previousMon.getDate() + 4)} eventList={eventList} dayOfWeek="Friday"/>
      <Day onEventClick={onEventClick} date={new Date(previousMon.getFullYear(), previousMon.getMonth(), previousMon.getDate() + 5)} eventList={eventList} dayOfWeek="Saturday"/>
      <Day onEventClick={onEventClick} date={new Date(previousMon.getFullYear(), previousMon.getMonth(), previousMon.getDate() + 6)} eventList={eventList} dayOfWeek="Sunday"/>
    </div>
  );

}

export default Calendar;

