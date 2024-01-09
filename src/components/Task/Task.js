import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from 'redux/operations';
import { MdClose } from 'react-icons/md';
import css from './Task.module.css';

//! this is ONE task 😍

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  const handleToggle = () => dispatch(toggleCompleted(task));
  const handleDelete = () => dispatch(deleteTask(task.id));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed} // true/false
        onClick={handleToggle}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
