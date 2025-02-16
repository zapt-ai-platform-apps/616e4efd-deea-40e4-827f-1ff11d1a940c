import React, { useState, useEffect } from 'react';

export default function Timer({ onBack }) {
  const options = [1, 5, 10, 30, 60];
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = (minutes) => {
    const seconds = minutes * 60;
    setTimeLeft(seconds);
    setIsRunning(true);
    console.log('Timer started for', minutes, 'minutes');
  };

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      const interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      console.log('Timer ended');
    }
  }, [isRunning, timeLeft]);

  const getOptionLabel = (opt) => {
    if (opt === 1) return '1 minute';
    if (opt === 60) return '1 hour';
    return `${opt} minutes`;
  };

  return (
    <div className="p-8 flex flex-col items-center justify-center">
      <button 
        onClick={onBack} 
        className="cursor-pointer bg-blue-500 text-white px-6 py-3 rounded mb-6"
      >
        Back
      </button>
      <h1 className="text-3xl font-bold mb-6 text-center">SnapTasks</h1>
      {!isRunning ? (
        <div className="flex flex-col items-center">
          <p className="text-xl mb-4">Select timer duration:</p>
          <div className="flex gap-4">
            {options.map(opt => (
              <button 
                key={opt} 
                onClick={() => startTimer(opt)}
                className="cursor-pointer bg-yellow-500 text-white px-6 py-3 rounded"
              >
                {getOptionLabel(opt)}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <p className="text-xl">
            Time left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
          </p>
        </div>
      )}
    </div>
  );
}