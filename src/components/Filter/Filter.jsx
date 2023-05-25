import React from 'react';
import { useDispatch } from 'react-redux';
import { choiceFilter } from 'redux/Contacts/Filter/filterSlice';
import css from './Filter.module.css';

function Filter() {
  const dispatch = useDispatch();

  const changesFilter = e => {
    const value = e.currentTarget.value;
    dispatch(choiceFilter(value));
  };

  return (
    <label className={css.label}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        name="filter"
        onChange={changesFilter}
      />
    </label>
  );
}

export default Filter;
