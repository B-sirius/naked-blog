import React, { PureComponent } from 'react';
import { Router, Link } from 'react-router-dom';
import history from 'Util/history';

import './style.scss';

export default class Menu extends PureComponent {
  renderPages = () => {
    const { currPage, pageCount } = this.props;
    let pages = [];
    if (currPage !== 1) {
      pages.push((
        <Link className="extend" to={`/page/${currPage - 1}`} key="prev" >Prev</Link>
      ))
    }
    for (let i = 1; i <= pageCount; i++) {
      pages.push((
        currPage === i
          ? <span className="page-number current" key={i} >{i}</span>
          : <Link className="page-number" to={`/page/${i}`} key={i} >{i}</Link>
      ))
    }
    if (currPage !== pageCount) {
      pages.push((
        <Link className="extend" to={`/page/${currPage + 1}`} key="next" >Next</Link>
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