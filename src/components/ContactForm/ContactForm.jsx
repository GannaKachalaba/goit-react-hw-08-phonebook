import { useState } from 'react';
import {
  useAddContactMutation,
  useFetchContactsQuery,
} from 'redux/Contacts/contactsApi';
import PropTypes from 'prop-types';
import css from 'components/ContactForm/ContactForm.module.css';

function ContactForm({ onClose }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data: contacts } = useFetchContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  const onChangeName = e => setName(e.currentTarget.value);
  const onChangeNumber = e => setNumber(e.currentTarget.value);

  const onSubmitForm = e => {
    e.preventDefault();

   
    const data = { name, number };

    if (
     contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name}`, 'This user is already in the contact list.', 'OK');
      return;
    }

    addContact( data );
    

    reset();
    onClose();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onSubmitForm}>
      <label className={css.label}>
        <span className={css.title}>Name</span>
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={onChangeName}
        />
      </label>
      <label className={css.label}>
        <span className={css.title}>Number</span>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={onChangeNumber}
          className={css.input}
        />
      </label>
      <button type="submit" className={css.button} disabled={isLoading}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ContactForm;


