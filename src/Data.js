const Data =[
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
    //     component: <Successfully />,
    //     // message:'Congratulations your meeting is created successfully !',
    //     end:true
    // },
    {
      id: '10',
      component: (
        <div className='container-fluid success-container'> 
          <div className='main-chat'>
          <h1>Congratulations your meeting is created successfully </h1>
          <p className='mt-5'>Meeting details will appear here</p>
          <div className='d-flex justify-content-between mt-5'>
            <button className='btn btn-primary-delete '>Delete</button>
            <a className=' btn btn-primary-team mx-auto'>View in Teams</a>
          </div>
          </div>
        </div>
      ),
      end:true
    }
  ]
  export default Data;