import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
class Review extends Component {
  

  

 
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

class MyChat extends Component {
  render() {
    return (
      <ChatBot
      headerTitle="Welcome To Page"
      floating="true"
   
        steps={[
          {
            id: '1',
            message: ' hey Dear..!! What is your name?',
            trigger: 'name',
          },
          {
            id: 'name',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi {previousValue}! How are you?',
            trigger: 'gender',
          },
          {
            id: 'gender',
            options: [
              { value: 'good', label: 'good', trigger: '5' },
              { value: 'female', label: 'very well', trigger: '5' },

            ],
          },
          {
            id: '5',
            message: 'ohhh thats great..Do you like my Portfolio?',
            trigger: 'like',
          },
          {
            id:'like',
            options: [
                { value: 'yes', label: 'yes', trigger: '6' },
                { value: 'no', label: 'No', trigger: '7' },
              ],
          },
          {
            id:'6',
            message:'Thank you so much !!!!',
            end: true,
          },
          {
            id:'7',
            message:'Thanks for suggestion I will improve my Protfolio ',
            end: true,
          },
        ]}
      />
    );
  }
}

export default MyChat;