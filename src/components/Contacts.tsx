import React from 'react';
import './Contacts.css';

const Contacts: React.FC = () => {
  return (
    <div className="contacts-wrapper">
      <h1>Contacts</h1>
      <div className="contact-item">
        <h2>Name1</h2>
        <p>Facebook: name1</p>
        <p>Instagram: @name1</p>
      </div>
      <div className="contact-item">
        <h2>Name2</h2>
        <p>Facebook: name2</p>
        <p>Instagram: @name2</p>
      </div>
      <div className="contact-item">
        <h2>Name3</h2>
        <p>Facebook: name3</p>
        <p>Instagram: @name3</p>
      </div>
    </div>
  );
};

export default Contacts;