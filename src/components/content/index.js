import React, { PureComponent } from 'react';
import Article from 'Components/article';
import './style.scss';

export default class Content extends PureComponent {
  render() {
    return (
      <div>
        <div className="content-inner">
          <Article />
        </div>
      </div>
    );
  }
}

