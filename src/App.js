// for a class based component we need
// to import both React AND Component
// Component gives us additional functionality
// necessary for a class based, or stateful
// react component
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

// Custom Components
import Person from './Person';
import People from './People';

class App extends Component {
  // We initialize our App component with a
  // constructor
  constructor(props) {
    // This allows us to 'hook' into Component's
    // constructor to bring in additional
    // Component functionality.
    super(props);
    // The main thing that Component gives us
    // access to is 'state', or data local
    // to our component
    // I now have access to this.state.people
    // anywhere in my App.js component
    this.state = {
      apiDataLoaded: false,
      apiError: false,
      people: [
        {
          name: 'Casey',
          occupation: 'Instructor',
          friend: 0
        },
        {
          name: 'Jason',
          occupation: 'Professional Wrestler',
          friend: 1
        },
        {
          name: 'Josh',
          occupation: 'Inventor',
          friend: 0
        },
        {
          name: 'Phillippe',
          occupation: 'Superman',
          friend: 1
        },
        {
          name: 'Steven',
          occupation: 'Instagram Model',
          friend: 0
        },
        {
          name: 'Anthony',
          occupation: 'Only Fans Model',
          friend: 1
        }
      ]
    }
  }

  componentDidMount() {
    axios.get('https://randomuser.me/api/')
      .then(data => {
        console.log(data);
        this.setState({
          newPerson: data.data.results[0],
          apiDataLoaded: true,
          apiError: false
        })
      })
      .catch(err => {
        console.log(err);
        this.setState({
          apiError: true
        })
      })
  }

  render() {
    const friends = this.state.people.filter((person) => {
      return person.friend === 1;
    })

    const nonFriends = this.state.people.filter((person) => {
      return person.friend === 0;
    })

    return (
      <div className="App">
        <h1>Friends</h1>
        <ul>
          <People header="Not Friends" people={nonFriends} />
          <People header="Friends" people={friends} />
          { this.state.apiError && <p>Sorry, try again</p> }
          { this.state.apiDataLoaded === false && <p>Loading user data!</p> }
          { this.state.apiDataLoaded && <p>{this.state.newPerson.email}</p> }
        </ul>
      </div>
    );
  }
}

export default App;
