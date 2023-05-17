import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  addContact = newContact => {
    if (this.checkContactNameRepeat(newContact.name)) {
      alert(`${newContact.name} already exists`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };
  checkContactNameRepeat = name => {
    const temporaryNameArray = this.state.contacts.map(item => item.name);
    // console.log(temporaryNameArray);
    return temporaryNameArray.includes(name);
  };

  onDeleteContact = index => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(element => element.id !== index),
      };
    });
  };
  handleFilterContacts = () => {
    return this.state.contacts.filter(item =>
      item.name.toLowerCase().includes(this.state.filter.toLowerCase().trim())
    );
  };
  handleChangeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));

    if (contacts) {
      this.setState({ contacts: contacts });
      return;
    }

    this.setState({ contacts: this.state.contacts });
  }

  componentDidUpdate(_, prevState) {
    const updatedContactsList = this.state.contacts;
    const prevContactsList = prevState.contacts;

    if (updatedContactsList !== prevContactsList) {
      localStorage.setItem('contacts', JSON.stringify(updatedContactsList));
    }
  }

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter
          handleChange={this.handleChangeFilter}
          value={this.state.filter}
        />
        <ContactList
          contacts={this.handleFilterContacts()}
          onDeleteContact={this.onDeleteContact}
        />
      </Container>
    );
  }
}
