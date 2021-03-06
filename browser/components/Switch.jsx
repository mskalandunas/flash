import PropTypes from 'prop-types';
import React from 'react';

import { ApplicationView } from './ApplicationView';
import { Deck } from './Deck';

export const Switch = props => {
  const { decks, loading } = props;

  switch (true) {
    case loading:
      return <h1>Loading</h1>;
    case !decks.length:
      return <h1>Empty State</h1>
    default:
      return <ApplicationView decks={decks} />;
  }
};

Switch.defaultProps = {
  decks: [],
  loading: false
};

Switch.propTypes = {
  decks: PropTypes.arrayOf(PropTypes.shape(Deck.propTypes)),
  loading: PropTypes.bool
};