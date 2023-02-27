import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';

import styles from './ContactList.module.css';

const ContactList = ({ contacts, onRemove }) => {
  // const addContact = contact => {
  //   if (typeof handleAdd === 'function') {
  //     handleAdd(contact);
  //   }
  // };
  if (contacts.length === 0) return null;
  return (
    <ul className={styles.ContactList}>
      {contacts.map(contact => (
        <ContactListItem
          {...contact}
          onAdd={this.handleAdd}
          onRemove={onRemove}
          key={contact.id}
        />
      ))}
    </ul>
  );
};

// const ContactList = ({ contacts, onRemove, onAdd }) => {
//   const handleAddContact = contact => {
//     if (typeof onAdd === 'function') {
//       onAdd(contact);
//     }
//   };

//   if (contacts.length === 0) return null;
//   return (
//     <div>
//       <button
//         onClick={() =>
//           handleAddContact({ name: 'New Contact', number: '1234567890' })
//         }
//       >
//         Add Contact
//       </button>
//       <ul className={styles.ContactList}>
//         {contacts.map(contact => (
//           <ContactListItem {...contact} onRemove={onRemove} key={contact.id} />
//         ))}
//       </ul>
//     </div>
//   );
// };
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleAdd: PropTypes.func,
  onRemove: PropTypes.func.isRequired,
};

export default ContactList;
