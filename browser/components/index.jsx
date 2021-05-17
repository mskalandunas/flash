import React from 'react';

import { Model } from './Model';
import { Switch } from './Switch';

export const Application = props => (
  <Model registryAddress={props.registryAddress}>
    <Switch />
  </Model>
);