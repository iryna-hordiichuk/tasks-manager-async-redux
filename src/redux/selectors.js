import { statusFilters } from './constants';
import { createSelector } from '@reduxjs/toolkit';

export const selectTasks = state => state.tasks.items;
export const selectIsLoading = state => state.tasks.isLoading;
export const selectError = state => state.tasks.error;
export const selectStatusFilter = state => state.filters.status;

//! these are memoized selectors

export const selectVisibleTasks = createSelector(
  [selectTasks, selectStatusFilter],
  (tasks, statusFilter) => {
    switch (statusFilter) {
      case statusFilters.active:
        return tasks.filter(task => !task.completed);
      case statusFilters.completed:
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  }
);

export const selectTaskCount = createSelector([selectTasks], tasks => {
  return tasks.reduce(
    (count, tasks) => {
      if (tasks.completed) {
        count.completed += 1;
      } else {
        count.active += 1;
      }
      return count;
    },
    { active: 0, completed: 0 }
  );
});
