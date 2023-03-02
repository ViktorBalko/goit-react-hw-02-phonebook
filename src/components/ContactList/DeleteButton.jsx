import PropTypes from 'prop-types';

function DeleteButton({ onDeleteContact, contactId }) {
  return (
    <button type="button" onClick={() => onDeleteContact(contactId)}>
      del
    </button>
  );
}

DeleteButton.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contactId: PropTypes.string.isRequired,
};

export default DeleteButton;
