import React from 'react';

export default function EventForm({ eventForm, setEventForm, addEvent }) {
  return (
    <form onSubmit={addEvent} className="p-4 border rounded">
      <h3 className="mb-2 text-xl font-bold">Add Event</h3>
      <div className="mb-2">
        <p className="mb-1 font-semibold">Selected Date:</p>
        <p className="mb-2">{eventForm.date || 'No day selected'}</p>
      </div>
      <div className="mb-2">
        <input 
          type="text" 
          placeholder="Event Title" 
          value={eventForm.title} 
          onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
          className="w-full border p-2 box-border text-black"
          required
        />
      </div>
      <div className="mb-2">
        <input 
          type="time" 
          placeholder="Start Time"
          value={eventForm.startTime} 
          onChange={(e) => setEventForm({ ...eventForm, startTime: e.target.value })}
          className="w-full border p-2 box-border text-black"
          required
        />
      </div>
      <div className="mb-2">
        <input 
          type="time" 
          placeholder="End Time"
          value={eventForm.endTime} 
          onChange={(e) => setEventForm({ ...eventForm, endTime: e.target.value })}
          className="w-full border p-2 box-border text-black"
          required
        />
      </div>
      <button 
        type="submit" 
        className="cursor-pointer bg-green-500 text-white px-4 py-2 rounded"
        disabled={!eventForm.date}
      >
        Add Event
      </button>
    </form>
  );
}