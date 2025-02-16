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

  return (
    <div className="p-4">
      <button onClick={onBack} className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded mb-4">
        Back
      </button>
      {!isRunning ? (
        <div>
          <p>Select timer duration (minutes):</p>
          <div className="flex gap-2">
            {options.map(opt => (
              <button 
                key={opt} 
                onClick={() => startTimer(opt)} 
                className="cursor-pointer bg-yellow-500 text-white px-4 py-2 rounded"
              >
                {opt} {opt === 60 ? '1 hour' : `${opt} min`}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <p className="text-xl">Time left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</p>
        </div>
      )}
    </div>
  );
}