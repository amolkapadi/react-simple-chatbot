import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import Data from './Data'




class SimpleForm extends Component {
  
  render() {
    return (
      <ChatBot 
        headerTitle="One-solution Chatbot"
        width="100%"
        height="99vh"
        steps={Data}
        
      />
    );
  }
}

export default SimpleForm;