import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addTask = createAction('tasks/addTasks', text => {
  return {
    payload: {
      text,
      id: nanoid(),
      completed: false,
    },
  };
});

console.log(addTask('Learn Redux')); // {type: "tasks/addTask", payload: "Learn Redux"}
console.log(addTask.type); // "tasks/AddTask"

export const deleteTask = createAction('tasks/deleteTasks');

export const toggleCompleted = createAction('tasks/toggleCompleted');

export const setStatusFilter = createAction('tasks/setStatusFilter');
