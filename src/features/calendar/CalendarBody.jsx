import React from 'react';

export default function CalendarBody({ currentDate, eventForm, setEventForm, events, addEvent }) {
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const daysArray = [];
  for (let i = 1; i <= daysInMonth; i++) {
    daysArray.push(i);
  }

  return (
    <>
      <div className="grid grid-cols-7 gap-2 mb-4">
        {daysArray.map(day => (
          <div key={day} className="p-2 border text-center">
            {day}
          </div>
        ))}
      </div>
      <form onSubmit={addEvent} className="p-4 border rounded">
        <h3 className="mb-2">Add Event</h3>
        <div className="mb-2">
          <input 
            type="date" 
            value={eventForm.date} 
            onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })}
            className="w-full border p-2 box-border"
            required
          />
        </div>
        <div className="mb-2">
          <input 
            type="text" 
            placeholder="Event Title" 
            value={eventForm.title} 
            onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
            className="w-full border p-2 box-border"
            required
          />
        </div>
        <div className="mb-2">
          <input 
            type="time" 
            value={eventForm.startTime} 
            onChange={(e) => setEventForm({ ...eventForm, startTime: e.target.value })}
            placeholder="Start Time"
            className="w-full border p-2 box-border"
            required
          />
        </div>
        <div className="mb-2">
          <input 
            type="time" 
            value={eventForm.endTime} 
            onChange={(e) => setEventForm({ ...eventForm, endTime: e.target.value })}
            placeholder="End Time"
            className="w-full border p-2 box-border"
            required
          />
        </div>
        <button type="submit" className="cursor-pointer bg-green-500 text-white px-4 py-2 rounded">
          Add Event
        </button>
      </form>
      <div className="mt-4">
        <h3 className="text-lg">Events</h3>
        {events.length === 0 ? (
          <p>No events added.</p>
        ) : (
          <ul>
            {events.map((ev, index) => (
              <li key={index}>
                {ev.date}: {ev.title} ({ev.startTime} - {ev.endTime})
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}