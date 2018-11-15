import React, { PureComponent } from 'react';
import Article from 'Components/article';
import ArticleList from 'Components/articlelist';
import Archives from 'Components/archives';
import Interlude from 'Components/interlude';
import NotFound from 'Components/notfound';
import posts from 'Posts/posts.json';
import categoryMap from 'Posts/categoryMap.json';
import tagMap from 'Posts/tagMap.json';
import { Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import history from 'Util/history';
import { getPageNum } from 'Util/helper';
import PropTypes from 'prop-types';

import './style.scss';

export default class Content extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isInterlude: false
    }
  }

  enableInterlude = () => {
    this.setState({
      isInterlude: true
    });
  }

  disableInterlude = () => {
    this.setState({
      isInterlude: false
    });

    window.scrollTo(0, 0);
  }

  render() {
    const { enableInterlude, disableInterlude } = this;
    const { isInterlude } = this.state;

    return (
      <Router history={history}>
        <Route
          render={({ location }) => (
            <div className="content-outer">
              <div className="content-inner">
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    classNames="wait"
                    timeout={800}
                    onEnter={enableInterlude}
                    onExited={disableInterlude}
                  >
                    <Switch location={location}>
                      <Route exact path="/" render={props => (
                        <SelectedArticleList
                          {...props}
                        />
                      )} />
                      <Route path="/page/:pageNumStr" render={props => (
                        <SelectedArticleList
                          {...props}
                        />
                      )} />
                      <Route exact path="/category/:selectedKey" render={props => (
                        <SelectedArticleList
                          {...props}
                          map={categoryMap}
                        />
                      )} />
                      <Route path="/category/:selectedKey/page/:pageNumStr" render={props => (
                        <SelectedArticleList
                          {...props}
                          map={categoryMap}
                        />
                      )} />
                      <Route exact path="/tag/:selectedKey" render={props => (
                        <SelectedArticleList
                          {...props}
                          map={tagMap}
                        />
                      )} />
                      <Route path="/tag/:selectedKey/page/:pageNumStr" render={props => (
                        <SelectedArticleList
                          {...props}
                          map={tagMap}
                        />
                      )} />
                      <Route path="/archives" component={Archives} />
                      <Route path="/post" component={Article} />
                      <Route component={NotFound} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </div>
              <Interlude
                isInterlude={isInterlude}
              />
            </div>
          )}
        />
      </Router>
    );
  }
}

class SelectedArticleList extends PureComponent {
  getList = map => {
    const { selectedKey = null } = this.props.match.params;
    if (selectedKey) {
      const list = map[selectedKey];
      if (!list) {
        return [];
      }

      return list;
    }

    return posts;
  }

  getCurrCatalog = () => {
    const { url } = this.props.match;
    const { pageNumStr } = this.props.match.params;
    if (pageNumStr) {
      return url.match(/(\S)+(?=page\/[0-9]+)/g)[0];
    }
    
    return url[url.length - 1] === '/' ? url : `${url}/`;
  }

  render() {
    const { getList, getCurrCatalog } = this;
    const { map } = this.props;
    const { pageNumStr = '1' } = this.props.match.params;

    return (
      <ArticleList
        list={getList(map)}
        pageNum={getPageNum(pageNumStr)}
        catalog={getCurrCatalog()}
      />
    )
  }
}

SelectedArticleList.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      pageNumStr: PropTypes.string,
      selectedKey: PropTypes.string
    }),
    path: PropTypes.string,
    url: PropTypes.string
  })
}
