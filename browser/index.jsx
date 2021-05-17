import React from 'react';
import { render } from 'react-dom';

import { getRegistry } from './utils';
import { Application } from './components';

render(
  <Application registryAddress={getRegistry()} />,
  document.getElementById('ReactApplicationRoot')
);