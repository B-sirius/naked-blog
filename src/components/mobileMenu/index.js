import React, { PureComponent } from 'react';
import MobileMenuBtn from 'Components/mobileMenuBtn';
import MobileMenuContent from 'Components/mobileMenuContent';

export default class MobileMenu extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    }
  }

  disableScroll = e => {
    e.preventDefault();
  }

  openMobileMenu = () => {
    this.setState({
      isActive: true
    });
    // 使用原生方法fix
    document.addEventListener('touchmove', this.disableScroll, { passive: false })
  }

  closeMobileMenu = () => {
    console.log('nope')
    this.setState({
      isActive: false
    });
    document.removeEventListener('touchmove', this.disableScroll);
  }

  render() {
    const { isActive } = this.state;
    const { openMobileMenu } = this;

    return (
      <div>
        <MobileMenuBtn onClick={openMobileMenu} />
        <MobileMenuContent onClick={this.closeMobileMenu} isActive={isActive} />
      </div>
    );
  }
}