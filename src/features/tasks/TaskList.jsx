import React from 'react';
import TaskItem from './TaskItem';

export default function TaskList({ tasks, onCompleteTask, onDeleteTask }) {
  return (
    <div className="p-4 max-h-96 overflow-y-auto">
      {tasks.length === 0 ? (
        <p className="text-center">No tasks added yet.</p>
      ) : (
        tasks.map(task => (
          <TaskItem key={task.id} task={task} onCompleteTask={onCompleteTask} onDeleteTask={onDeleteTask} />
        ))
      )}
    </div>
  );
}