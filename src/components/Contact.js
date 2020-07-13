import React from 'react';
import contacts from '../data/contact.json';
import ExternalLinks from './ExternalLinks';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return contacts ? contacts.map(contact => <ExternalLinks name={contact.name} link={contact.link} />) : <div />;
    }
}
