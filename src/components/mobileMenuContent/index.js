import React, { PureComponent } from 'react';
import { Router, Link } from 'react-router-dom';
import history from 'Util/history';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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

export default class MobileMenuContent extends PureComponent {  
  render() {
    const {isActive, onClick} = this.props;

    return (
      <Router history={history}>
        <div className={classNames('mobile-menu-container', {'active': isActive})}>
          <div
            className="mobile-menu-wrapper"
            onClick={onClick}
          >
            <div className="mask"></div>
            <div className="bg"></div>
            <nav className="mobile-menu">
              {
                links.map(item => {
                  return item.chain ?
                    <a className='mobile-menu-item-link' href={item.url} target="_blank" rel="noopener noreferrer" key={item.name}>{item.name}</a>
                    :
                    <Link to={item.url} className='mobile-menu-item-link' key={item.name}>{item.name}</Link>
                })
              }
            </nav>
          </div>
        </div>
      </Router>
    );
  }
}

MobileMenuContent.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func
}