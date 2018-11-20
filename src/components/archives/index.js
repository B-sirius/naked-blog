import React, { PureComponent } from 'react';
import { Router, Link } from "react-router-dom";
import categoryMap from 'Posts/categoryMap.json';
import tagMap from 'Posts/tagMap.json';
import history from 'Util/history';

import './style.scss';

export default class Archives extends PureComponent {
  listContent = (path, listMap) => {
    const content = [];
    for (let key of Object.keys(listMap)) {
      content.push(
        <li key={key} className="list-item">
          <Link to={`/${path}/${key}`} className="list-link">{key}</Link>
        </li>
      )
    };
    return content;
  }

  render() {
    const { listContent } = this;

    return (
      <Router history={history}>
        <div className="archive">
          <div>
            <h2 className="title">Categories</h2>
            <ul className="archives-list">
              {listContent('category', categoryMap)}
            </ul>
          </div>
          <div>
            <h2 className="title">Tags</h2>
            <ul className="archives-list">
              {listContent('tag', tagMap)}
            </ul>
          </div>
        </div>
      </Router>
    );
  }
}

