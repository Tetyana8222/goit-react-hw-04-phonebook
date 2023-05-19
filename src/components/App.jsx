import { useState, useEffect } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container } from './App.styled';

export function App() {
  const { contacts, setContacts } = useLocalStorage();
  const [filter, setFilter] = useState('');
  // при зміні масиву кожного разу визивається useEffect
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    if (checkContactNameRepeat(newContact.name)) {
      alert(`${newContact.name} already exists`);
    } else {
      setContacts(prevState => [...prevState, newContact]);
    }
  };
  const checkContactNameRepeat = name => {
    const temporaryNameArray = contacts.map(item => item.name);
    // console.log(temporaryNameArray);
    return temporaryNameArray.includes(name);
  };

  const onDeleteContact = index => {
    setContacts(prevState => prevState.filter(element => element.id !== index));
  };
  const handleFilterContacts = () => {
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };
  const handleChangeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  // useEffect(() => {
  //   const savedContacts = JSON.parse(localStorage.getItem('contacts'));
  //   if (savedContacts) {
  //     setContacts(savedContacts);
  //   } else {
  //     setContacts([]);
  //   }
  // }, [setContacts]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />

      <h2>Contacts</h2>
      <Filter handleChange={handleChangeFilter} value={filter} />
      <ContactList
        contacts={handleFilterContacts()}
        onDeleteContact={onDeleteContact}
      />
    </Container>
  );
}

export default App;
