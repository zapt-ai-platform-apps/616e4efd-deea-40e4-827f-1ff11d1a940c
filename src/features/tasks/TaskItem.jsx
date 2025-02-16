import React, { useState } from 'react';

export default function TaskItem({ task, onCompleteTask, onDeleteTask }) {
  const [touchStartX, setTouchStartX] = useState(0);
  
  const handleTouchStart = (e) => {
    setTouchStartX(e.changedTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX;
    const threshold = 50;
    if (diff > threshold && !task.completed) {
      onCompleteTask(task.id);
    } else if (diff < -threshold) {
      onDeleteTask(task.id);
    }
  };

  return (
    <div 
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className={`p-4 border mb-2 rounded ${task.completed ? 'line-through bg-green-100' : 'bg-gray-100'} text-black cursor-pointer`}
    >
      <div><strong>{task.task}</strong></div>
      <div>Start: {task.startTime} | End: {task.endTime}</div>
    </div>
  );
}