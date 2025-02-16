import { useState } from 'react';

function useTasks() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskData) => {
    setTasks(prev => [...prev, { ...taskData, id: Date.now(), completed: false }]);
    console.log('Task added:', taskData);
  };

  const completeTask = (taskId) => {
    setTasks(prev => prev.map(task => task.id === taskId ? { ...task, completed: true } : task));
    console.log('Task completed:', taskId);
  };

  const deleteTask = (taskId) => {
    setTasks(prev => prev.filter(task => task.id !== taskId));
    console.log('Task deleted:', taskId);
  };

  return { tasks, addTask, completeTask, deleteTask };
}

export default useTasks;