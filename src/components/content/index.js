import React, { PureComponent } from 'react';
import ArticleContent from 'Components/articlecontent';
import './style.scss';

export default class Content extends PureComponent {
  render() {
    return (
      <div>
        <div className="content-inner">
          <ArticleContent />
        </div>
      </div>
    );
  }
}

