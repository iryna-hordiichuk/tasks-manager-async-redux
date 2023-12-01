import { useSelector } from 'react-redux';
import { getTasks, getStatusFilter } from 'redux/selectors';
import { statusFilters } from '../../redux/constants';
import { Task } from 'components/Task/Task';
import css from './TaskList.module.css';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);

    case statusFilters.completed:
      return tasks.filter(task => task.completed);
      

    default:
      return tasks;
  }
};

export const TaskList = () => {
  const tasks = useSelector(getTasks);
  const statusFilter = useSelector(getStatusFilter);
  
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={css.list}>
      {visibleTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} /> 
        </li>
      ))}
    </ul>
  );
};


 //* a subscribtion to the store:
 // under the hood useSelector function will receive a reference
 // to the state. 
  // but we do not need all the state, a component
  // requires only its relevant slice of state. 
  // this is why here in useSelector we return a reference 
  // to state.tasks 
  // useSelector - this is a mechanism to read something 
  // from the state (like get method)
  // when the property in question in the state changes 
  // useSelector will initialize a rerender.
 