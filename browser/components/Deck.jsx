import PropTypes from 'prop-types';
import React from 'react';

import { ACTIONS } from '../constants';
import { Card } from './Card';

export class Deck extends React.Component {
  constructor() {
    super();

    this.state = this._createInitialState(ACTIONS);
    
    this.cardActionHandler = this.cardActionHandler.bind(this);
    this.renderCard = this.renderCard.bind(this);
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
        <Card {...card} handleClick={this.cardActionHandler} />
      </li>
    );
  }

  render() {
    return [
      <h1>{this.props.name}</h1>,
      <table>
        <tr>
          {ACTIONS.map(action => <th key={action.type}>{action.display}</th>)}
          <th>Incomplete</th>
        </tr>
      </table>,
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