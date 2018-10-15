import React, { PureComponent } from 'react';
import LogoContainer from 'Components/logocontainer';
import Menu from 'Components/menu';
import 'style.scss';

export default class Sidebar extends PureComponent {
  render () {
    return (
      <div className='sidebar'>
        <LogoContainer />
        <Menu />
      </div>
    );
  }
}

