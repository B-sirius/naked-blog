import React, { PureComponent } from 'react';
import Article from 'Components/article';
import ArticleList from 'Components/articlelist';
import { Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import history from 'Util/history';

import './style.scss';

export default class Content extends PureComponent {
  render() {
    return (
      <Router history={history}>
        <Route
          render={({ location }) => (
            <div>
              <div className="content-inner">
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    classNames="fade"
                    timeout={300}
                  >
                    <Switch location={location}>
                      <Route exact path="/" component={ArticleList} />
                      <Route path="/page/:pageNum" component={ArticleList} />
                      <Route path="/post" component={Article} />
                      <Route render={() => <div>Not Found</div>} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </div>
            </div>
          )}
        />
      </Router>
    );
  }
}

