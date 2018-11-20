import React, { PureComponent } from 'react';
import Sidebar from 'Components/sidebar';
import Main from 'Components/main';
import MobileMenu from 'Components/mobileMenu';
import './App.scss';

export default class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <Sidebar />
        <MobileMenu />
        <Main />
      </div>
    );
  }
}
