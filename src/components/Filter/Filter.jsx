import { InputGroup, Input, InputLabel, InputBar  } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import { changeFilter } from '../../redux/filtersSlice';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleFilter = e => {
    e.preventDefault();
    dispatch(changeFilter(e.currentTarget.value));
  };
  return (
    <>
      <p>Find contacts by name</p>
      <InputGroup>
        <Input
          type="text"
          id="filter_input"
          name="filter"
          value={filter}
          onChange={handleFilter}
        />
        <InputLabel htmlFor="filter_input">
          Filter
        </InputLabel>
        <InputBar></InputBar>
      </InputGroup>
    </>
  );
};

export default Filter;