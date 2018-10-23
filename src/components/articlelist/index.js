import React, { PureComponent } from 'react';
import { Router, Link } from "react-router-dom";
import { postsList } from 'Posts';
import history from 'Util/history';
import Pages from 'Components/pages';

import './style.scss';

export default class ArticleList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      postsList,
      postsCount: 10, // 每页条数
    }
  }

  currPage = () => {
    let { pageNum } = this.props.match.params;
    pageNum = parseInt(pageNum);
    return isNaN(pageNum) ? 1 : pageNum;
  }

  pageCount = () => {
    const { postsList, postsCount } = this.state;
    return Math.ceil((postsList.length + 1) / postsCount);
  }

  currLists = () => {
    const { postsList, postsCount } = this.state;
    const { currPage } = this;
    const offset = (currPage() - 1) * postsCount;
    return postsList.slice(offset, offset + postsCount);
  }

  routeArticle = (name) => () => {
    history.push(`/post/${name}`);
  }

  render() {
    const lists = this.currLists();
    const { routeArticle, pageCount, currPage } = this;

    return (
      <Router history={history}>
        <div>
          <div>
            {
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
                            <a href="javascript:;" key={tag} className="tag">#{tag}</a>
                          ))
                        }
                      </div>
                    }
                    {item.description && <div className="recent-post-description">{item.description}</div>}
                  </div>
                </div>
              ))
            }
          </div>
          <Pages
            pageCount={pageCount()}
            currPage={currPage()}
          />
        </div>
      </Router>
    );
  }
}

