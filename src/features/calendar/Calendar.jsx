import React, { useState } from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';

export default function Calendar({ onBack }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [eventForm, setEventForm] = useState({ date: '', title: '', startTime: '', endTime: '' });
  const [events, setEvents] = useState([]);
  const [showEvents, setShowEvents] = useState(false);

  const handlePrev = () => {
    const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    setCurrentDate(prevMonth);
  };

  const handleNext = () => {
    const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    setCurrentDate(nextMonth);
  };

  const addEvent = (e) => {
    e.preventDefault();
    if (!eventForm.date || !eventForm.title || !eventForm.startTime || !eventForm.endTime) return;
    setEvents(prevEvents => [...prevEvents, eventForm]);
    console.log('Event added:', eventForm);
    setEventForm({ date: '', title: '', startTime: '', endTime: '' });
  };

  const toggleEvents = () => {
    setShowEvents(prev => !prev);
  };

  return (
    <div className="p-4">
      <CalendarHeader
        currentDate={currentDate}
        handlePrev={handlePrev}
        handleNext={handleNext}
        onBack={onBack}
        onToggleEvents={toggleEvents}
        showEvents={showEvents}
      />
      {showEvents && (
        <div className="p-4 border rounded mb-4">
          <h3 className="mb-2 text-xl font-bold">Events</h3>
          {events.length === 0 ? (
            <p>No events added.</p>
          ) : (
            <ul className="list-disc pl-5">
              {events.map((ev, index) => (
                <li key={index}>
                  {ev.date}: {ev.title} ({ev.startTime} - {ev.endTime})
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      <CalendarBody
        currentDate={currentDate}
        eventForm={eventForm}
        setEventForm={setEventForm}
        addEvent={addEvent}
      />
    </div>
  );
}