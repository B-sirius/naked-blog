import React, { PureComponent } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { INTERLUDE_BG_LIST } from 'Constant';

import './style.scss';

export default class Interlude extends PureComponent {
  constructor(props) {
    super(props);

    const { getContentWidth, getRandomBg } = this;
    this.state = {
      contentWidth: getContentWidth(),
      interludeBg: getRandomBg()
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateContentWidth);
  }

  getContentWidth = () => {
    const pageWidth = document.body.offsetWidth;
    return pageWidth > 1024 ? pageWidth - 240 : pageWidth;
  }

  updateContentWidth = () => {
    const { getContentWidth } = this;
    this.setState({
      contentWidth: getContentWidth()
    })
  }

  getRandomBg = () => {
    const randomIndex = Math.floor(Math.random() * INTERLUDE_BG_LIST.length);
    return INTERLUDE_BG_LIST[randomIndex];
  }

  render() {
    const { isInterlude } = this.props;
    const { contentWidth, interludeBg } = this.state;

    return (
      <div>
        <div className={classNames('interlude-bg', { 'interlude-bg-active': isInterlude })}></div>
        <div className={classNames('interlude-img-container', { 'interlude-img-container-active': isInterlude })}>
          <div 
            className="interlude-img"
            style={{
              width: `${contentWidth}px`,
              backgroundImage: `url(${interludeBg})`
            }}
            alt="cool pic"
          ></div>
          <div className="interlude-mask"></div>
        </div>
      </div>
    );
  }
}

Interlude.propTypes = {
  isInterlude: PropTypes.bool
}