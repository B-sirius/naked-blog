import React, { PureComponent } from 'react';
import { Router, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import history from 'Util/history';
import { NO_MATCH } from 'Constant';
import Pages from 'Components/pages';

import './style.scss';

export default class ArticleList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      postsCount: 10, // 每页条数
    }
  }

  pageCount = () => {
    const { list } = this.props;
    const { postsCount } = this.state;
    return Math.ceil((list.length + 1) / postsCount);
  }

  currLists = () => {
    const { list, pageNum } = this.props;
    const { postsCount } = this.state;

    if (pageNum === NO_MATCH) {
      return [];
    }

    const offset = (pageNum - 1) * postsCount;
    return list.slice(offset, offset + postsCount);
  }

  routeArticle = (name) => () => {
    history.push(`/post/${name}`);
  }

  render() {
    const lists = this.currLists();
    const { pageCount } = this;
    const { pageNum, catalog } = this.props;

    return (
      <Router history={history}>
        <div>
          <div>
            {
              !!lists.length ?
                lists.map(item => (
                  <div className="recent-post-item" key={item.title}>
                    <div className="recent-post-info">
                      <Link to={`/post/${item.name}`} className="link" >
                        <span className="title">{item.title}</span>
                      </Link>
                      {item.date && <time className="recent-post-time">{item.date}</time>}
                      {
                        item.tags.length &&
                        <div className="recent-post-tag-list">
                          {
                            item.tags.map(tag => (
                              <Link to={`/tag/${tag}`} key={tag} className="tag">#{tag}</Link>
                            ))
                          }
                        </div>
                      }
                      {item.description && <div className="recent-post-description">{item.description}</div>}
                    </div>
                  </div>
                ))
                :
                '什么都没有找到'
            }
          </div>
          <Pages
            pageCount={pageCount()}
            pageNum={pageNum}
            catalog={catalog}
          />
        </div>
      </Router>
    );
  }
}

ArticleList.propTypes = {
  list: PropTypes.array,
  pageNum: PropTypes.oneOfType(
    [
      PropTypes.number,
      PropTypes.symbol
    ]
  ),
  catalog: PropTypes.string
}
