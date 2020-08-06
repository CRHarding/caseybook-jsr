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
import Profile from './Profile';
import Friends from './Friends';

class App extends Component {
  constructor(props) {
    super(props);
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
        <Profile />
        <Friends
          nonFriends={nonFriends}
          friends={friends}
          apiError={this.state.apiError}
          apiDataLoaded={this.state.apiDataLoaded}
          newPerson={this.state.newPerson}
        />
      </div>
    );
  }
}

export default App;
