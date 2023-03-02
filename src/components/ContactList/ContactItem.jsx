import PropTypes from 'prop-types';
import DeleteButton from './DeleteButton';

function ContactItem({ contact, onDeleteContact }) {
  const { name, number } = contact;

  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <DeleteButton onDeleteContact={onDeleteContact} contactId={contact.id} />
    </li>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
