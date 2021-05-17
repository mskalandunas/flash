import React from 'react';

import { ApplicationView } from './ApplicationView';

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