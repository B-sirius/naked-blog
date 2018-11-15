import React, { PureComponent } from 'react';
import { Router, Link } from 'react-router-dom';
import history from 'Util/history';
import { NO_MATCH } from 'Constant';
import PropTypes from 'prop-types';

import './style.scss';

export default class Pages extends PureComponent {
  renderPages = () => {
    const { pageNum, pageCount, catalog } = this.props;
    let pages = [];

    if (pageNum !== 1 && pageNum !== NO_MATCH) {
      pages.push((
        <Link className="extend" to={`${catalog}page/${pageNum - 1}`} key="prev" >Prev</Link>
      ))
    }
    for (let i = 1; i <= pageCount; i++) {
      pages.push((
        pageNum === i
          ? <span className="page-number current" key={i} >{i}</span>
          : <Link className="page-number" to={`${catalog}page/${i}`} key={i} >{i}</Link>
      ))
    }
    if (pageNum !== pageCount && pageNum !== NO_MATCH) {
      pages.push((
        <Link className="extend" to={`${catalog}page/${pageNum + 1}`} key="next" >Next</Link>
      ))
    }
    return pages;
  }

  render() {
    const { renderPages } = this;

    return (
      <Router history={history}>
        <div className='pages-container'>
          {renderPages()}
        </div>
      </Router>
    );
  }
}

Pages.propTypes = {
  pageCount: PropTypes.number,
  pageNum: PropTypes.oneOfType(
    [
      PropTypes.number,
      PropTypes.symbol
    ]
  ),
  catalog: PropTypes.string
}