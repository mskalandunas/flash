import React from 'react';

import { Model } from './Model';

export const Application = props => (
  <Model registryAddress={props.registryAddress}>
    <h1>Hello world</h1>
  </Model>
);