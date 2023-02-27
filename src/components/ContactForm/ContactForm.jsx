import { Component } from 'react';
// import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const { name, number } = this.state;
    const { handleAdd } = this.prop;

    const isValidatedForm = this.validateForm();

    if (!isValidatedForm) return;

    handleAdd({ id: nanoid(), name, number });
  };

  validateForm = () => {
    const { name, number } = this.state;
    const { onCheckUnique } = this.props;

    if (!name || !number) {
      alert('some field is empty');
      return false;
    }
    return onCheckUnique(name);
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
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
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <input
          type="tel"
          name="number"
          className={styles.ContactFormInput}
          placeholder="Phone"
          value={number}
          onChange={this.handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit" className={styles.ContactFormButton}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  handleAdd: PropTypes.func.isRequired,
  onCheckUnique: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ContactForm;
