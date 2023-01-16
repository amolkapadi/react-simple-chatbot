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

class SimpleForm extends Component {
  render() {
    return (
      <ChatBot
        headerTitle="One-solution Chatbot"
        width="100%"
        height="99vh"
        steps={[
          {
            id: '1',
            message: 'Hello Welcome to One-Solutions ! What is your Name',
            trigger: 'name',
          },
          {
            id: 'name',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi {previousValue}! How are you ? How can I help You?',
            trigger: 'create-meeting',
          },
          {
            id: 'create-meeting',
            options: [
              { value: 'request', label: 'Create Meeting request', trigger: '5' },
              { value: 'task', label: 'Create Task', trigger: '5' },
            ],
          },
          {
            id: '5',
            message: 'DO you want to create Meeting for a Project ?',
            trigger: 'update-meeting',
          },
          {
            id: 'update-meeting',
            options: [
              { value: 'yes', label: 'Yes', trigger: '7' },
              { value: 'no', label: 'No', trigger: 'update-yes' },
            ],
          },
          {
            id: 'select-meeting',
            options: [
              { value: 'name1', label: '1. The Great Effect ', trigger: '8' },
              { value: 'name2', label: '2. Avocado', trigger: 'update-yes' },
              { value: 'name3', label: '3.Avangers', trigger: 'update-yes' },

            ],
          },
          {
            id: 'update-yes',
            message: 'Selected Project 1',
            trigger: '6'
          },
          {
            id: '6',
            message: 'Do you want to Select Project Team members to join the meeting ?',
            trigger: 'update-meeting',
          },
          {
            id: '7',
            message: 'Thats great ! Choose the Project ?',
            trigger: 'select-meeting'
          },
          {
            id: '8',
            message: 'Plase select  Team Members ',
            trigger: 'select-Members'
          },
          {
            id: 'select-Members',
            options: [
              { value: 'name', label: '@Per Ronny @Santosh Kotnis @Devendra Phadnis', trigger: '9' },
            ],
          },
          {
            id: '9',
            message: 'All the Information looks Great!!! Do you want to confirm Create Meeting ?',
            trigger: 'final-meeting'
          },
          {
            id: 'final-meeting',
            options: [
              { value: 'yes', label: 'Yes', trigger: '10' },
              { value: 'no', label: 'No', end: true },
            ],
          },
          //   {
          //     id:'10',
          //     message:'Congratulations your meeting is created successfully !',
          //     end:true
          // },
          {
            id: '10',
            component: (
              <div> 
                <h1>Congratulations your meeting is created successfully </h1>
                <p>Meeting details will appear here</p>
                <div className='d-flex'>
                  <button className='btn-delete '>Delete</button>
                  <button className='btn-Temas '>View in Teams</button>
                </div>
              </div>
            ),
            end:true
          }
        ]}
      />
    );
  }
}

export default SimpleForm;