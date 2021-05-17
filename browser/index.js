import React from 'react';
import { render } from 'react-dom';

import { getRegistry } from './utils';
import { Model } from './Model';

render(
  <Model registryAddress={getRegistry()}>
    <h1>Hello world</h1>
  </Model>,
  document.getElementById('ReactApplicationRoot')
);