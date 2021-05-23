import PropTypes from 'prop-types';
import React from 'react';

import { Deck } from './Deck';

export class ApplicationView extends React.Component {
  render() {
    return (
      <div>
        {this.props.decks.map(deck => {
          return <Deck key={deck.canonicalName} {...deck} />
        })}
      </div>
    );
  }
}

ApplicationView.propTypes = {
  decks: PropTypes.arrayOf(Deck.propTypes).isRequired
};