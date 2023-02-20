import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = INITIAL_STATE;

  handleChangeForm = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleSubmitForm = evt => {
    evt.preventDefault();

    const { name, number } = this.state;
    const { onAdd } = this.props;

    const isValidatedForm = this.validateForm();

    if (!isValidatedForm) return;

    onAdd({ id: nanoid(), name, number });

    this.resetForm();
  };

  validateForm = () => {
    const { name, number } = this.state;
    const { onCheckUnique } = this.props;

    if (!name || !number) {
      alert('some field is empty');
      return false; //
    }

    return onCheckUnique(name);
  };

  resetForm = () => {
    this.setState(INITIAL_STATE);
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmitForm} className={styles.ContactForm}>
        <input
          type="text"
          name="name"
          className={styles.ContactFormInput}
          placeholder="Name"
          value={name}
          onChange={this.handleChangeForm}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <input
          type="tel"
          name="number"
          className={styles.ContactFormInput}
          placeholder="Phone"
          value={number} // #1
          onChange={this.handleChangeForm}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit" className={styles.ContactFormButton}>
          add Contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  handleSubmitForm: PropTypes.func.isRequired,
};

export default ContactForm;
