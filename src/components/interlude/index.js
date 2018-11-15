import React, { PureComponent } from 'react';
import './style.scss';
import PropTypes from 'prop-types';

export default class Interlude extends PureComponent {
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

Interlude.propTypes = {
  isInterlude: PropTypes.bool
}