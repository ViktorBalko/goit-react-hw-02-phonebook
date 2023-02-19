import React, { Component } from 'react';
import ContactForm from './Form/ContactForm';
import ContactList from './Contact/ContactList';
import ContactFilter from './Filter/ContactFilter';

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

  handleAddContact = newContact => {
    const { contacts } = this.state;
    const normalizedContacts = contacts.map(contact =>
      contact.name.toLowerCase()
    );

    if (normalizedContacts.includes(newContact.name.toLowerCase())) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  handleCheckUniqueContact = name => {
    const { contacts } = this.state;
    const isExistContact = !!contacts.find(contact => contact.name === name);

    isExistContact && alert('contact is already exist');
    return !isExistContact;
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
          {/* <ContactForm onAdd={this.handleAddContact} /> */}
          <ContactForm
            onAdd={this.handleAddContact}
            onCheckUnique={this.handleCheckUniqueContact}
          />
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