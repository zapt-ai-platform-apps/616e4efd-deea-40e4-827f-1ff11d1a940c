import React, { useState, useEffect } from 'react';
import TaskInput from '../features/tasks/TaskInput';
import TaskList from '../features/tasks/TaskList';
import Timer from '../features/timer/Timer';
import Calendar from '../features/calendar/Calendar';
import useTasks from '../hooks/useTasks';
import useDarkMode from '../hooks/useDarkMode';

export default function HomeScreen() {
  const { tasks, addTask, completeTask, deleteTask } = useTasks();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [mode, setMode] = useState('home');
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timerInterval = setInterval(() => setCurrentDate(new Date()), 60000);
    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div className={`h-full ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} transition-colors duration-300`}>
      <header className="flex justify-between items-center p-4">
        <button onClick={toggleDarkMode} className="cursor-pointer px-2 py-1 border rounded">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <div>{currentDate.toLocaleDateString()}</div>
      </header>
      {mode === 'home' && (
        <>
          <div className="flex justify-between items-center p-4">
            <button onClick={() => setMode('calendar')} className="cursor-pointer bg-orange-500 text-white px-4 py-2 rounded">
              Calendar
            </button>
            <button onClick={() => setShowTaskForm(!showTaskForm)} className="cursor-pointer bg-green-500 text-white px-4 py-2 rounded">
              Add Task
            </button>
            <button onClick={() => setMode('timer')} className="cursor-pointer bg-yellow-500 text-white px-4 py-2 rounded">
              Set Timer
            </button>
          </div>
          {showTaskForm && <TaskInput onAddTask={addTask} />}
          <TaskList tasks={tasks} onCompleteTask={completeTask} onDeleteTask={deleteTask} />
        </>
      )}
      {mode === 'timer' && <Timer onBack={() => setMode('home')} />}
      {mode === 'calendar' && <Calendar onBack={() => setMode('home')} />}
      <div className="fixed bottom-4 left-4">
        <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500">
          Made on ZAPT
        </a>
      </div>
    </div>
  );
}