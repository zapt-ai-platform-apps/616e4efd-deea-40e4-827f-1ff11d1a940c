import React from 'react';

export default function CalendarDays({ currentDate, eventForm, setEventForm }) {
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const daysArray = [];
  for (let i = 1; i <= daysInMonth; i++) {
    daysArray.push(i);
  }

  const handleDayClick = (day) => {
    const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const formattedDate = selectedDate.toISOString().split('T')[0];
    setEventForm({ ...eventForm, date: formattedDate });
    console.log('Selected date:', formattedDate);
  };

  return (
    <div className="grid grid-cols-7 gap-2 mb-4 text-center">
      {daysArray.map(day => {
        const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        const formattedDate = selectedDate.toISOString().split('T')[0];
        const isSelected = eventForm.date === formattedDate;
        return (
          <div 
            key={day} 
            className={`p-2 border cursor-pointer ${isSelected ? 'bg-blue-200' : ''}`}
            onClick={() => handleDayClick(day)}
          >
            {day}
          </div>
        );
      })}
    </div>
  );
}