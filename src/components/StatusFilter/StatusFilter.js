import { useSelector, useDispatch } from 'react-redux';
import { statusFilters } from '../../redux/constants';
import { selectStatusFilter } from '../../redux/selectors';
import { setStatusFilter } from 'redux/filtersSlice';
import { Button } from 'components/Button/Button';
import css from './StatusFilter.module.css';

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);
  // this is subscribtion to the slice of state this component needs.
  // this filter we get from the store to use in "selected" property/attribute

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));
  // parameter filter here is the info from UI which we send (dispatch) to the store

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
