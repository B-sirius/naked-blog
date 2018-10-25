import React, { PureComponent } from 'react';
import './style.scss';

export default class Interlude extends PureComponent {

  constructor(props) {
    super(props);
  }

  interludeClassName = () => {
    const {isInterlude} = this.props;
    return isInterlude ? 'interlude interlude-active' : 'interlude';
  }

  render() {
    const { interludeClassName } = this;

    return (
      <div className={interludeClassName()}></div>
    );
  }
}

