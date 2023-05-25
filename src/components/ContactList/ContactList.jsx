import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from 'redux/Contacts/contactsApi';
import { getFilter } from 'redux/Contacts/Selectors/selectors';
import Contact from 'components/Contact/Contact';
import { useEffect } from 'react';
import css from './ContactList.module.css';

function ContactList() {
  const { data: contacts, refetch } = useFetchContactsQuery();
  const { filter } = useSelector(state => getFilter(state));

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    if (!contacts) {
      return;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filterList = filterContacts();

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <ul>
      {contacts &&
        filterList.map(({ id, name, phone: number }) => {
          return (
            <li className={css.item} key={id}>
              <Contact name={name} number={number} id={id} />
            </li>
          );
        })}
    </ul>
  );
}

export default ContactList;
