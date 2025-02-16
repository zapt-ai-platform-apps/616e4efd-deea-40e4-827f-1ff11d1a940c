import React, { useState } from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';

export default function Calendar({ onBack }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [eventForm, setEventForm] = useState({ date: '', title: '', startTime: '', endTime: '' });
  const [events, setEvents] = useState([]);

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
    setEvents(prev => [...prev, eventForm]);
    console.log('Event added:', eventForm);
    setEventForm({ date: '', title: '', startTime: '', endTime: '' });
  };

  return (
    <div className="p-4">
      <CalendarHeader currentDate={currentDate} handlePrev={handlePrev} handleNext={handleNext} onBack={onBack} />
      <CalendarBody currentDate={currentDate} eventForm={eventForm} setEventForm={setEventForm} events={events} addEvent={addEvent} />
    </div>
  );
}