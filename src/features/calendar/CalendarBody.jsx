import React from 'react';
import CalendarDays from './CalendarDays';
import EventForm from './EventForm';

export default function CalendarBody({ currentDate, eventForm, setEventForm, events, addEvent }) {
  return (
    <div className="p-4">
      <CalendarDays currentDate={currentDate} eventForm={eventForm} setEventForm={setEventForm} />
      <EventForm eventForm={eventForm} setEventForm={setEventForm} addEvent={addEvent} events={events} />
    </div>
  );
}