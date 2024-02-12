import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from './contactForm/ContactForm';
import { Filter } from './filter/Filter';
import { ContactList } from './contactsList/ContactsList';
import { Layout } from './Layout';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...newContact, id: nanoid() }],
    }));
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  findContact = contact => {
    this.setState({ filter: contact });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => id !== contact.id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} allContacts={contacts} />
        <h2>Contacts</h2>
        <Filter findContact={this.findContact} />
        <ContactList
          contactList={visibleContacts}
          deleteContact={this.deleteContact}
        />
      </Layout>
    );
  }
}