import React, { PureComponent } from 'react';

import './style.scss';

export default class LogoContainer extends PureComponent {
  render () {
    return (
      <div className="logo-container">
        <canvas width="240" height="300"></canvas>
      </div>
    );
  }
}

