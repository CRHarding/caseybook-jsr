import React from 'react';

function Profile(props) {
  return (
    <div>
      <h1>Profile Page</h1>
      <h4>{props.user.name}</h4>
      <h6>{props.user.occupation}</h6>
    </div>
  )
}

export default Profile;
