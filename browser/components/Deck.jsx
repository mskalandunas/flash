import PropTypes from 'prop-types';
import React from 'react';

import { ACTIONS } from '../constants';
import { Card } from './Card';

export class Deck extends React.Component {
  constructor() {
    super();

    this.state = this._createInitialState(ACTIONS);
    
    this._renderCard = this._renderCard.bind(this);
    this.cardActionHandler = this.cardActionHandler.bind(this);
  }

  cardActionHandler(type, id) {
    this.setState(state => ({
      [type]: [...state[type], id]
    }));
  }

  _createInitialState() {
    return ACTIONS.reduce((state, action) => (state[action.type] = []) && state, {});
  }

  _createTableRows() {
    return this.state[this._findLargestType()].map((_, i) => {
      return (
        <tr key={'tr_' + i}>
          {Object.keys(this.state).map(key => {
            return (
              <td key={'td_' + key + '_' + i}>{this.state[key][i]}</td>
            )
          })}
        </tr>
      )
    });
  }

  _findLargestType() {
    const lengthToType = ACTIONS.reduce(
      (types, action) => {
        return (types[this.state[action.type].length] = action.type) && types
      },
    {});
    const highestCount = Math.max(...Object.keys(lengthToType).map(key => +key));

    return lengthToType[highestCount];
  }
  
  _renderCard(card, i) {
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
        <thead>
          <tr>
            {ACTIONS.map(action => <th key={action.type}>{action.display}</th>)}
            <th>Incomplete</th>
          </tr>
        </thead>
        <tbody>
          {this._createTableRows()}
        </tbody>
      </table>,
      <ul>
        {this.props.cards.map(this._renderCard)}
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