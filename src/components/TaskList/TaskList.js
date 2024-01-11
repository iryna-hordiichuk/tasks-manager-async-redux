import { useSelector } from 'react-redux';
import { selectVisibleTasks } from 'redux/selectors';
import { Task } from 'components/Task/Task';
import css from './TaskList.module.css';

export const TaskList = () => {
  const visibleTasks = useSelector(selectVisibleTasks);

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
