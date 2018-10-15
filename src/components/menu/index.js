import React, { PureComponent } from 'react';

const links = [
  {
    name: 'Home',
    url: '#',
  },
  {
    name: 'Archives',
    url: '#',
  },
  {
    name: 'Github',
    url: '#',
  },
  {
    name: 'About',
    url: '#',
  },
]

export default class Menu extends PureComponent {
  render () {
    return (
      <div className='menu-container'>
        links.map((item, index) => (
          <div className='menu-item'>
            <div className={`menu-item-bg bg${index}`}></div>
            <div className='mask'></div>
            <a href={item.url} className='menu-item-link'>{item.name}</a>
          </div>
        ))
      </div>
    );
  }
}

