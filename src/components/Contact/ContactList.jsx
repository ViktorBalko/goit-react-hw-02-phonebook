import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';

import styles from './ContactList.module.css';

const ContactList = ({ contacts, onRemove }) => {
  if (contacts.length === 0) return null;
  return (
    <ul className={styles.ContactList}>
      {contacts.map(contact => (
        <ContactListItem {...contact} onRemove={onRemove} key={contact.id} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ContactList;
