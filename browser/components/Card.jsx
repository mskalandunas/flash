import PropTypes from 'prop-types';
import React from 'react';

import { ACTIONS } from '../constants';

export class Card extends React.Component {
  renderActions(action, i) {
    const { handleClick, id } = this.props;

    return (
      <li key={action.type + '_' + i}>
        <button onClick={() => handleClick(action.type, id)}>
          {action.display}
        </button>
      </li>
    )
  }

  render() {
    const { body, content, title } = this.props;

    return (
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
        {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
        {ACTIONS.map(this.renderActions)}
      </div>);
  }
};

Card.propTypes = {
  body: PropTypes.string.isRequired,
  content: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};