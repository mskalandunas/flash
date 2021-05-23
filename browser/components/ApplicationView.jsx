import PropTypes from 'prop-types';
import React from 'react';

import { Deck } from './Deck';

export class ApplicationView extends React.Component {
  renderDecks(deck, i) {
    return (
      <li key={deck.canonicalName + '_' + i}>
        <Deck {...deck} />
      </li>
    )
  }

  render() {
    return (
      <div>
        {this.props.decks.map(this.renderDecks)}
      </div>
    );
  }
}

ApplicationView.propTypes = {
  decks: PropTypes.arrayOf(PropTypes.shape(Deck.propTypes)).isRequired
};