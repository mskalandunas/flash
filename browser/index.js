import React from 'react';
import { render } from 'react-dom';

import { getRegistry } from './utils';
import { Model } from './Model';

render(<Model registryAddress={getRegistry()} />, document.getElementById('ReactApplicationRoot'));