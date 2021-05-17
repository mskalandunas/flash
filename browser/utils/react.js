import React from 'react';

export const applyPropsToChildren = props => child =>
  React.isValidElement(child) ? React.cloneElement(child, props) : child;