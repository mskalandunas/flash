import React from 'react';

export const Switch = props => {
  switch (true) {
    case props.loading:
      return <h1>Loading</h1>;
    case !props.decks.length:
      return <h1>Empty State</h1>
    default:
      return null;
  }
};