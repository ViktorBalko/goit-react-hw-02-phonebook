import { Component } from 'react';
// import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = {
    name: '',
    phone: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const { name, phone } = this.state;
    const { onAdd } = this.prop;

    const isValidatedForm = this.validateForm();

    if (!isValidatedForm) return;

    onAdd({ id: nanoid(), name, phone });
  };

  validateForm = () => {
    const { name, phone } = this.state;
    const { onCheckUnique } = this.props;

    if (!name || !phone) {
      alert('some field is empty');
      return false;
    }

    return onCheckUnique(name);

    // const isUnique = onCheckUnique(name);

    // if (!isUnique) {
    //   alert(`${name} is already in contacts`);
    //   return false;
    // }

    // return true;
  };

  resetForm = () => {
    this.setState({
      name: '',
      phone: '',
    });
  };

  render() {
    const { name, phone } = this.state;

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
          name="phone"
          className={styles.ContactFormInput}
          placeholder="Phone"
          value={phone}
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
  onAddContact: PropTypes.func.isRequired,
  onCheckUnique: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ContactForm;
