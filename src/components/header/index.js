import React, { PureComponent } from 'react';
import './style.scss';

export default class Header extends PureComponent {
  render () {
    return (
      <div className='header'>
        <div>
          <h1 className="header-title">
            <span className="bold">Sirius’s</span>
            <span className="light">{' blog'}</span>
          </h1>
          <h2 className="header-subtitle">赞美太阳</h2>
        </div>
      </div>
    );
  }
}

