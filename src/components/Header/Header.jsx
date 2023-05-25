import { useState } from 'react';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import Modal from 'components/Modal/Modal';
import ContactForm from 'components/ContactForm/ContactForm';
import css from './Header.module.css';

function Header() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);

  return (
    <>
      <h1 className={css.title}>
        Phone<span className={css.title__color}>book</span>
      </h1>
      <button className={css.button} type="button" onClick={toggleModal}>
        <span className={css.button__text}>Add new contact</span>{' '}
        <BsFillPersonPlusFill size={20} />
      </button>

      {showModal && (
        <Modal onClose={toggleModal}>
          <ContactForm onClose={toggleModal} />
        </Modal>
      )}
    </>
  );
}

export default Header;
