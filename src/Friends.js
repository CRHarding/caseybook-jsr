import React from 'react';
import People from './People';

function Friends(props) {
  return (
    <div>
      <h1>Friends</h1>
      <ul>
        <People header="Not Friends" people={props.nonFriends} />
        <People header="Friends" people={props.friends} />
        { props.apiError && <p>Sorry, try again</p> }
        { props.apiDataLoaded === false && <p>Loading user data!</p> }
        { props.apiDataLoaded && <p>{props.newPerson.email}</p> }
      </ul>
    </div>
  )
}

export default Friends;
