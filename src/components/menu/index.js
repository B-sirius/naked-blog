import React, { PureComponent } from 'react';
import { Router, Link } from 'react-router-dom';
import history from 'Util/history';

import './style.scss';

const links = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Archives',
    url: '/archives',
  },
  {
    name: 'Github',
    url: 'https://github.com/b-sirius',
  },
  {
    name: 'About',
    url: 'javascript:;',
    chain: true, // 外链
  },
]

export default class Menu extends PureComponent {
  render() {
    return (
      <Router history={history}>
        <div className='menu-container'>
          {
            links.map((item, index) => (
              <div className='menu-item' key={index}>
                <div className={`menu-item-bg bg${index}`}></div>
                <div className='mask'></div>
                {
                  item.chain ?
                  <a className='menu-item-link' href={item.url} target="_blank" rel="noopener noreferrer">{item.name}</a>
                  :
                  <Link to={item.url} className='menu-item-link'>{item.name}</Link>
                }
              </div>
            ))
          }
        </div>
      </Router>
    );
  }
}

