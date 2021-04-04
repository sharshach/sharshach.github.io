import React from "react";
import contacts from "../../data/contact.json";
import './Contact.css';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show : false,
    };
  }

  ShowContacts=()=>{
    return contacts ? (
      contacts.map(contact => (
        <div className="contact-col" key={contact.name}>
              <a href={contact.link}><i className={contact.class} style={{background:contact.background,color:contact.color}}></i></a>
        </div>
      ))
    ) : (
      <div />
    );
  }
  toogleShowHide=()=>{
    const {show} = this.state;
    if(show){
      this.setState({show:false});
    }
    else{
      this.setState({show:true});
    }
  }
  render() {
    const {show}= this.state;
    return(
      <div>
        {show?<this.ShowContacts/>:""}
        <div className="contact-col">
          <button 
            type="button" 
            name="show contacts" 
            onClick={this.toogleShowHide} 
            className="show-hide-contacts-button"
          >
          {show?"X":"#"}
          </button>
        </div>
      </div>
    );
  }
}
