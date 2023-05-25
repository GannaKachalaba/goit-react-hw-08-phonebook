import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useFetchContactsQuery } from 'redux/Contacts/contactsApi';
import Message from 'components/Message/Message';
import Header from 'components/Header/Header';
import css from 'components/App.module.css';

function Contacts() {
  const { data: contacts } = useFetchContactsQuery();
  return (
    <>
      <div className={css.container}>
        <Header />
      </div>
      <div className={css.container}>
        <h2 className={css.subtitle}>Contacts</h2>
        <Filter className={css.container} />

        {contacts && contacts.length > 0 ? (
          <ContactList className={css.container} />
        ) : (
          <Message massage="Contact list is empty" />
        )}
      </div>
    </>
  );
}

export default Contacts;
