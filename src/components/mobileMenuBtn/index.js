import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default class MobileMenuBtn extends PureComponent {
  render() {
    const {onClick} = this.props;
    
    return (
      <div className='mobile-topbar'>
        <a href="javascript:;" className="menu-btn" onClick={onClick}></a>
      </div>
    );
  }
}

MobileMenuBtn.propTypes = {
  onClick: PropTypes.func 
}

