import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Form, TextFiled, Label, AddcontactBtn } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChangeInput = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  handleSubmitForm = event => {
    event.preventDefault();
    const newContact = {
      id: nanoid(3),
      ...this.state,
    };
    this.props.addContact(newContact);
    this.resetState();
    //cleaning form reset
    // this.setState({ name: '', number: '' });
  };
  resetState = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmitForm}>
        <Label>
          Name
          <TextFiled
            onChange={this.handleChangeInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
          />
        </Label>
        <Label htmlFor="">
          Number
          <TextFiled
            onChange={this.handleChangeInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
          />
        </Label>
        <AddcontactBtn type="submit">ADD CONTACT</AddcontactBtn>
      </Form>
    );
  }
}
ContactForm.propTypes = { addContact: PropTypes.func.isRequired };
