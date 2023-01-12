import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      gender: '',
      age: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, gender, age } = steps;

    this.setState({ name, gender, age });
  }

  render() {
    const { name, gender, age } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{gender.value}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{age.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
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
            id:'update-yes',
            message:'Selected Project 1',
             trigger:'6'
          },
          {
            id:'6',
            message: 'Do you want to Select Project Team members to join the meeting ?',
            trigger: 'update-meeting',
          },
         {
            id:'7',
            message: 'Thats great ! Choose the Project ?',
            trigger:'select-meeting'
        },
        {
            id:'8',
            message: 'Plase select  Team Members ',
            trigger:'select-Members'
        },
        {
            id: 'select-Members',
            options: [
              { value: 'name', label: '@Per Ronny @Santosh Kotnis @Devendra Phadnis', trigger: '9' },
            ],
          },
        {
            id:'9',
            message:'All the Information looks Great!!! Create Meeting ?',
           trigger:'final-meeting'
        },
        {
            id: 'final-meeting',
            options: [
              { value: 'yes', label: 'Yes', trigger:'10' },
              { value: 'no', label: 'No', end:true },
            ],
          },
          {
            id:'10',
            message:'Congratulations your meeting is created successfully !',
            end:true
        },
        //   {
        //     id: 'age',
        //     user: true,
        //     trigger: '7',
        //     validator: (value) => {
        //       if (isNaN(value)) {
        //         return 'value must be a number';
        //       } else if (value < 0) {
        //         return 'value must be positive';
        //       } else if (value > 120) {
        //         return `${value}? Come on!`;
        //       }

        //       return true;
        //     },
        //   },
        //   {
        //     id: '7',
        //     message: 'Great! Check out your summary',
        //     trigger: 'review',
        //   },
        //   {
        //     id: 'review',
        //     component: <Review />,
        //     asMessage: true,
        //     trigger: 'update',
        //   },
        //   {
        //     id: 'update',
        //     message: 'Would you like to update some field?',
        //     trigger: 'update-question',
        //   },
        //   {
        //     id: 'update-question',
        //     options: [
        //       { value: 'yes', label: 'Yes', trigger: 'update-yes' },
        //       { value: 'no', label: 'No', trigger: 'end-message' },
        //     ],
        //   },
        //   {
        //     id: 'update-yes',
        //     message: 'Thats great! Choose the Project ?',
        //     trigger: 'update-fields',
        //   },
        //   {
        //     id: 'update-fields',
        //     options: [
        //       { value: 'name', label: 'The great Effect', trigger: 'update-name' },
        //       { value: 'gender', label: 'Avocado', trigger: 'update-gender' },
        //       { value: 'age', label: 'Avangers', trigger: 'update-age' },
        //     ],
        //   },
        //   {
        //     id: 'update-name',
        //     update: 'name',
        //     trigger: '7',
        //   },
        //   {
        //     id: 'update-gender',
        //     update: 'gender',
        //     trigger: '7',
        //   },
        //   {
        //     id: 'update-age',
        //     update: 'age',
        //     trigger: '7',
        //   },
        //   {
        //     id: 'end-message',
        //     message: 'Thanks! Your data was submitted successfully!',
        //     end: true,
        //   },
        ]}
      />
    );
  }
}

export default SimpleForm;