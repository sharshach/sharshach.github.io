import React from 'react';
import ExternalLinks from './ExternalLinks';
export default class Contact extends React.Component{
    render(){
        return(
            <div>
                <ExternalLinks link="tel:+917013765669" name="mobile" />
                <ExternalLinks link="https://www.linkedin.com/in/sharshach/" name="linkedin" />
                <ExternalLinks link="mailto:sharshach@gmail.com" name="mail" />
                <ExternalLinks link="https://wa.me/+917013765669" name="whatsapp" />
            </div>
        );
    }
}