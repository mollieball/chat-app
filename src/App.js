import React from 'react';
import Contact from './components/Contact';
import ContactList from './components/ContactList';

function App() {
  return (
    <div className="App">
      <ContactList/>
      <Contact
        avatar="https://randomuser.me/api/portraits/women/94.jpg"
        name="Samantha Cast"
        online={true}
      />
      <Contact
        avatar="https://randomuser.me/api/portraits/women/45.jpg"
        name="Jean Torres"
        online={false}
      />
      <Contact
        avatar="https://randomuser.me/api/portraits/men/39.jpg"
        name="Jimmie Hansen"
        online={false}
      />
    </div>
  );
}

export default App;
