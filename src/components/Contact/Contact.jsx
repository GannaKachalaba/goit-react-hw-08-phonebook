import React from 'react';
import { FaTrash, FaUserAlt } from 'react-icons/fa';
import css from 'components/Contact/Contact.module.css';
import { useDeleteContactMutation } from 'redux/Contacts/contactsApi';

function Contact({ name, number, id }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <>
      <div className={css.wrapper}>
        <span className={css.icon}>
          <FaUserAlt />
        </span>
        <p>{name}</p>
      </div>
      <div className={css.wrapper}>
        <p className={css.number}> {number}</p>
        <button
          className={css.button}
          type="button"
          onClick={() => {
            deleteContact(id);
          }}
          disabled={isLoading}
        >
          <FaTrash />
        </button>
      </div>
    </>
  );
}

export default Contact;
