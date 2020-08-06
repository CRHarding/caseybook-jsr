import React from 'react';

function Person(props) {
  return (
    <li>{props.name}, {props.occupation}</li>
  )
}

export default Person;
