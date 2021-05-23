import React from 'react';

export class Deck extends React.Component {
  reset() {}
  
  shuffle() {}

  render() {
    return (
      <h1>{this.props.name}</h1>
    );
  }
}