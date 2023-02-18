import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactListItem = ({ id, name, number, onRemove }) => {
  return (
    <li className={styles.ContactList__item}>
      {name}: {number}
      <button
        onClick={() => onRemove(id)}
        className={styles.ContactListItem__button}
      >
        Delete contact
      </button>
    </li>
  );
};

const ContactList = ({ contacts, onRemove }) => {
  if (contacts.length === 0) return null;
  return (
    <ul className={styles.ContactList}>
      {contacts.map(contact => (
        <ContactListItem {...contact} onRemove={onRemove} />
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
