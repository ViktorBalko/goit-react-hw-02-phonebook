import PropTypes from 'prop-types';
import DeleteButton from './DeleteButton';

import styles from './ContactList.module.css';

const ContactListItem = ({ name, number, id, onRemove }) => {
  return (
    <li className={styles.ContactList}>
      <p className={styles.ContactList__item}>
        {name}: {number}
      </p>
      <DeleteButton onRemove={onRemove} id={id} />
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ContactListItem;
