import React, { PureComponent } from 'react';
import Article from 'Components/article';
import ArticleList from 'Components/articlelist';
import Archives from 'Components/archives';
import Interlude from 'Components/interlude';
import posts from 'Posts/posts.json';
import categoryMap from 'Posts/categoryMap.json';
import tagMap from 'Posts/tagMap.json';
import { Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import history from 'Util/history';

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
    const { enableInterlude, disableInterlude, getList } = this;
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
                        <ArticleList
                          {...props}
                          list={posts}
                        />
                      )} />
                      <Route path="/page/:pageNum" render={props => (
                        <ArticleList
                          {...props}
                          list={posts}
                        />
                      )} />
                      <Route path="/category/:key" render={props => (
                        <SelectedArticleList
                          {...props}
                          map={categoryMap}
                        />
                      )} />
                      <Route path="/tag/:key" render={props => (
                        <SelectedArticleList
                          {...props}
                          map={tagMap}
                        />
                      )} />
                      <Route path="/archives" component={Archives} />
                      <Route path="/post" component={Article} />
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
  getList = (map) => {
    const { key } = this.props.match.params;
    const list = map[key];
    if (!list) {
      return;
    }

    return list;
  }

  render() {
    const { getList } = this;
    const { map } = this.props;

    return (
      <ArticleList list={getList(map)} />
    )
  }
}
