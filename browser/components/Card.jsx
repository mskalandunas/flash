import React from 'react';

import { ACTIONS } from '../constants';

export const Card = props => {
  const { handleClick, id } = props;

  return ACTIONS.map(action => {
    return (
      <button onClick={() => handleClick(action.type, id)}>
        {action.display}
      </button>
    );
  });
};