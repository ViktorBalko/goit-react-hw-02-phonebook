import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './Contact/ContactList';
import ContactFilter from './Filter/ContactFilter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // handleAdd = data => {
  //   const { name, phone } = data;
  //   const isFormValid = this.validateForm(name, phone);

  //   if (isFormValid) {
  //     const isContactExist = this.state.contacts.some(
  //       contact => contact.name.toLowerCase() === name.toLowerCase()
  //     );

  //     if (isContactExist) {
  //       alert(`${name} is already in contacts`);
  //     } else {
  //       this.setState(({ contacts }) => ({
  //         contacts: [{ id: nanoid(), name, phone }, ...contacts],
  //       }));
  //     }
  //   }
  // };

  handleAdd = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const isDuplicate = this.state.contacts.some(
      cont =>
        (cont.name.toLowerCase() === name.toLowerCase() &&
          cont.number === number) ||
        cont.number === number
    );

    if (isDuplicate) {
      alert(`${name} with number ${number} is already in contacts`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };

  // handleAdd = ({ name, number }) => {
  //   const contact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };

  //   this.state.contacts.some(
  //     cont =>
  //       (cont.name.toLowerCase() === contact.name.toLowerCase() &&
  //         cont.number === contact.number) ||
  //       cont.number === contact.number
  //   )
  //     ? alert(`${name} is already in contacts`)
  //     : this.setState(({ contacts }) => ({
  //         contacts: [contact, ...contacts],
  //       }));
  // };

  handleFilterContact = filter => this.setState({ filter });

  handleRemoveContact = id =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <h1 className="HomeworkTitle">React HW#2 ~ Phonebook</h1>
        <div className="AppBox">
          <h2 className="FormTitle">сontactAdd</h2>
          {/* <ContactForm /> */}
          <ContactForm onSubmit={this.handleAdd} />

          <h2 className="FormTitle">contactsList</h2>
          <ContactFilter filter={filter} onChange={this.handleFilterContact} />
          <ContactList
            contacts={visibleContacts}
            onRemove={this.handleRemoveContact}
          />
        </div>
      </>
    );
  }
}
