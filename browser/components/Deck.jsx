import PropTypes from 'prop-types';
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

Deck.propTypes = {
  canonicalName: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    body: PropTypes.string.isRequired,
    content: PropTypes.string,
    title: PropTypes.string.isRequired,
  })).isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};