import React, { Component } from 'react';
//components
import AddNameContact from './components/Form';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Телефонная книга</h1>
        <AddNameContact />
        <h2>Мои контакты: </h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}

export default App;
