import React from 'react';
import styles from './ContactList.module.css';

const DeleteButton = ({ onRemove, id }) => {
  return (
    <button
      onClick={() => onRemove(id)}
      className={styles.ContactListItem__button}
    >
      Delete contact
    </button>
  );
};

export default DeleteButton;
