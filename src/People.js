import React from 'react';
import Person from './Person';

function People(props) {
  return (
    <div>
      <h1>{props.header}</h1>
      {props.people.map(person => {
        return <Person
                  name={person.name}
                  occupation={person.occupation}
                />
      })}
    </div>
  )
}

export default People;
