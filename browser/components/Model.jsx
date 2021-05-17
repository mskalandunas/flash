import PropTypes from 'prop-types';
import React from 'react';

import { applyPropsToChildren } from '../utils';
import { batchFetchDecks } from '../api';

export class Model extends React.Component {
  constructor() {
    super();

    this.state = {
      decks: [],
      loading: false
    };

    this._applyDataToState = this._applyDataToState.bind(this);
  }

  _applyDataToState(data) {
    this.setState(() => ({
      decks: data,
      loading: false
    }));
  }

  _fetchData() {
    batchFetchDecks({
      url: this.props.registryAddress,
      success: this._applyDataToState
    });
  }

  _requestWrapper(fn) {
    this.setState(() => ({ loading: true }), fn);
  }

  componentDidMount() {
    this._requestWrapper(this._fetchData);
  }

  render() {
    return React.Children.map(
      this.props.children,
      applyPropsToChildren({}, this.state)
    );
  }
}

Model.propTypes = {
  registryAddress: PropTypes.string.isRequired
};