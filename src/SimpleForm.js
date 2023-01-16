import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import Data from './Data'

class Review extends Component {

}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

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