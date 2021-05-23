import PropTypes from 'prop-types';
import React from 'react';

import { ACTIONS } from '../constants';
import { Card } from './Card';

export class Deck extends React.Component {
  constructor() {
    super();

    this.state = this._createInitialState(ACTIONS);
  }

  cardActionHandler(type, id) {
    this.setState(state => ({
      [type]: [...state[type], id]
    }));
  }

  _createInitialState() {
    return ACTIONS.reduce((state, action) => (state[action.type] = []) && state, {});
  }
  
  renderCard(card, i) {
    return (
      <li key={card.title + '_' + i}>
        <Card {...card} handleAction={this.cardActionHandler} />
      </li>
    );
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