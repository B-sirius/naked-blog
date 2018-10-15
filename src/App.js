import React, { PureComponent } from 'react';
import ArticleContent from 'Components/articleContent';
import './constant.scss';
import './App.scss';

class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <ArticleContent />
      </div>
    );
  }
}

export default App;
