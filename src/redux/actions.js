import { nanoid } from 'nanoid';

//!ACTION GENERATORS
// an action can not be a static object,
// it has to be customizable, we should be able to 
// to set its properties dynamically (namely a property "payload")
// depending on what has happend in the UI. 
// this is why we create a (generator) function
// which takes an argument and returns
// an object. 

export const addTask = text => {
  return {
    type: 'tasks/addTask',
    payload: {
      id: nanoid(),
      completed: false,
      text,
    },
  };
};

export const deleteTask = taskId => {
  return {
    type: 'tasks/deleteTask',
    payload: taskId,
  };
};

export const toggleCompleted = taskId => {
  return {
    type: 'tasks/toggleCompleted',
    payload: taskId,
  };
};

export const setStatusFilter = value => {
  return {
    type: 'filters/setStatusFilter',
    payload: value,
  };
};
