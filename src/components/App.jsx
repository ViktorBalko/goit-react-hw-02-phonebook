import React, { Component } from 'react';
import ContactForm from './Form/ContactForm';
import ContactList from './Contact/ContactList';
import ContactFilter from './Filter/ContactFilter';
// import nanoid from 'nanoid';
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

  handleAdd = ({ contacts }) => {
    const name = this.state;
    const number = this.state;
    const isContactExists = contacts.some(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );

    if (isContactExists) {
      alert('Contact is already exist!');
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

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
          <ContactForm onAddContact={this.handleAdd} />

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
