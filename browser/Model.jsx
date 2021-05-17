import PropTypes from 'prop-types';
import React from 'react';

import { fetchRegistry } from './api';

export class Model extends React.Component {
  constructor() {
    super();

    this.state = {
      decks: []
    };
  }

  componentDidMount() {
    fetchRegistry({
      url: this.props.registryAddress,
      success: console.log
    });
  }

  render() {
    return (
      <h1>Hello world</h1>
    );
  }
}

Model.propTypes = {
  registryAddress: PropTypes.string.isRequired
};