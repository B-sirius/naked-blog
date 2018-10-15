import React, { PureComponent } from 'react';
import Sidebar from 'Components/sidebar';
import Main from 'Components/main';
import './App.scss';

class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default App;
