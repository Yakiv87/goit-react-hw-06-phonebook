import React from "react";
import PropTypes from "prop-types";
// import css from "./Filter.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

const Filter = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <input type="text" value={filter} onChange={handleChange} placeholder="Filter contacts" />
  );
};
Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };
export default Filter;


// const Filter = ({ value, onChange }) => {
//   return (
//     <label className={css.label}>
//       Filter contact by name
//       <input
//         className={css.input}
//         type="text"
//         value={value}
//         onChange={onChange}
//       />
//     </label>
//   );
// };

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

// export default Filter;