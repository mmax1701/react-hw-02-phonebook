import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleData = data => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));
  };

  render() {
    return (
      <div>
        <ContactForm handleData={this.handleData} />
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
