import PropTypes from 'prop-types';
import React from 'react';

import { Card } from './Card';

export class Deck extends React.Component {
  constructor() {
    super();
  }

  renderCard(card, i) {
    return (
      <li key={card.title + '_' + i}>
        <Card {...card} />
      </li>
    );
  }

  reset() {

  }
  
  shuffle() {

  }

  render() {
    return [
      <h1>{this.props.name}</h1>,
      <ul>
        {this.props.cards.map(this.renderCard)}
      </ul>
    ];
  }
}

Deck.propTypes = {
  canonicalName: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.shape({
    body: PropTypes.string.isRequired,
    content: PropTypes.string,
    title: PropTypes.string.isRequired,
  })).isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};