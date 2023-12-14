import React, { useState } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import s from "./Form.module.css";

const Form = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ name: "", number: "" });

  const handleClick = (event) => {
    const { value, name } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addContact(formData));
    resetState();
  };

  const resetState = () => {
    setFormData({ name: "", number: "" });
  };

  return (
    <form className={s.thumb} onSubmit={handleSubmit}>
      <label htmlFor={nanoid()}>
        <span className={s.name}>Name</span>
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Bath de Castelmore d'Artagnan"
          required
          value={formData.name}
          onChange={handleClick}
          id={nanoid()}
        />
      </label>

      <label>
        <span className={s.name}>Number</span>
        <input
          type="tel"
          className={s.input}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleClick}
          value={formData.number}
          id={nanoid()}
        />
      </label>
      <button type="submit" className={s.button}>
        Save contact
      </button>
    </form>
  );
};

Form.propTypes = {
  submitMethod: PropTypes.func.isRequired,
};

export default Form;
