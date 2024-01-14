
// ! Code in this reducer file is not needed any more
// as we use createSlice hook and a separate file 
// is created for every slice of the state 
// Slice contains reducer functions withing itself;
// Slice also generates actions.
// So slice returns reducers and actions.
// I left this code here to remind about the logic
// which led to utilizing createSlice hook

// ===========================================================

// import { createReducer } from '@reduxjs/toolkit';
// import { statusFilters } from './constants';
// import {
//   addTask,
//   deleteTask,
//   setStatusFilter,
//   toggleCompleted,
// } from './actions';

// const tasksInitialState = [
//   { id: 0, text: 'Learn HTML and CSS', completed: true },
//   { id: 1, text: 'Get good at JavaScript', completed: true },
//   { id: 2, text: 'Master React', completed: false },
//   { id: 3, text: 'Discover Redux', completed: false },
//   { id: 4, text: 'Build amazing apps', completed: false },
// ];

// export const tasksReducer = createReducer(tasksInitialState, {
//   [addTask]: (state, action) => {
//     state.push(action.payload);
//   },

//   [deleteTask]: (state, action) => {
//     const index = state.findIndex(task => task.id === action.payload);
//     state.splice(index,1);
//   }, 
//   [toggleCompleted]: (state, action) => {
//     for(const task of state) {
//       if(task.id === action.payload){
//         task.completed = !task.completed;
//         break;
//       }
//     }
//   },
// });

// const filtersInitialState = {
//   status: statusFilters.all,
// };

// export const filtersReducer = createReducer(filtersInitialState, {
//   [setStatusFilter]: (state, action) => {
// state.status = action.payload;
//   },
// });



// ===============================================

// here code in reducer functions is immutable;
// but the code above is mutable 
// as we use Redux Toolkit 
// and Immer library is used "under the hood"


// export const tasksReducer = createReducer(tasksInitialState, {
//   [addTask]: (state, action) => {
//     return [...state, action.payload];
//   },
//   [deleteTask]: (state, action) => {
//     return state.filter(task => task.id !== action.payload);
//   },
//   [toggleCompleted]: (state, action) => {
//     return state.map(task => {
//       if (task.id !== action.payload) {
//         return task;
//       }
//       return {
//         ...task,
//         completed: !task.completed,
//       };
//     });
//   },
// });

// const filtersInitialState = {
//   status: statusFilters.all,
// };

// export const filtersReducer = createReducer(filtersInitialState, {
//   [setStatusFilter]: (state, action) => {
//     return { ...state, status: action.payload };
//   },
// });

//💗 we don't have to use default block here
// (as in a switch function)
// createReducer function automatically adds default logic.
// =======================================================
// Calculated/computed object properties syntax - []
// converts property to a string
// [addTask] - "addTask";
// This is why we don't have to use
// dot notation syntax addTask.type
// in order to receive - "addTask" )))))
