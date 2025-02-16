import React, { useState } from 'react';

export default function TaskInput({ onAddTask }) {
  const [task, setTask] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task || !startTime || !endTime) return;
    setIsSubmitting(true);
    onAddTask({ task, startTime, endTime });
    setTask('');
    setStartTime('');
    setEndTime('');
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="mb-2">
        <input 
          type="text" 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          placeholder="Task" 
          className="w-full border p-2 box-border"
          required
        />
      </div>
      <div className="mb-2">
        <input 
          type="time" 
          value={startTime} 
          onChange={(e) => setStartTime(e.target.value)} 
          placeholder="Start Time" 
          className="w-full border p-2 box-border"
          required
        />
      </div>
      <div className="mb-2">
        <input 
          type="time" 
          value={endTime} 
          onChange={(e) => setEndTime(e.target.value)} 
          placeholder="End Time" 
          className="w-full border p-2 box-border"
          required
        />
      </div>
      <button type="submit" disabled={isSubmitting} className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded">
        {isSubmitting ? "Adding..." : "Add Task"}
      </button>
    </form>
  );
}