import React from 'react';

function getMonthYear(date) {
  return date.toLocaleString('default', { month: 'long', year: 'numeric' });
}

export default function CalendarHeader({ currentDate, handlePrev, handleNext, onBack }) {
  return (
    <>
      <button onClick={onBack} className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded mb-4">
        Back
      </button>
      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePrev} className="cursor-pointer px-2 py-1 border rounded">←</button>
        <h2 className="text-xl">{getMonthYear(currentDate)}</h2>
        <button onClick={handleNext} className="cursor-pointer px-2 py-1 border rounded">→</button>
      </div>
    </>
  );
}