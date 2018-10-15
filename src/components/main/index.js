import React, { PureComponent } from 'react';
import Header from 'Components/header';
import Content from 'Components/content';
import Footer from 'Components/footer';
import 'style.scss';

export default class Main extends PureComponent {
  render () {
    return (
      <div className='main'>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

