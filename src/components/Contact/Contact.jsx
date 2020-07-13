import React from "react";
import contacts from "../../data/contact.json";
import './Contact.css';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return contacts ? (
      contacts.map((contact) => (
        <div class="contact-col">
          <a href={contact.link}>{contact.name}</a>
        </div>
      ))
    ) : (
      <div />
    );
  }
}
