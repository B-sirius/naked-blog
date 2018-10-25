import React, { PureComponent } from 'react';
import Article from 'Components/article';
import ArticleList from 'Components/articlelist';
import Interlude from 'Components/interlude';
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
                      <Route exact path="/" component={ArticleList} />
                      <Route path="/page/:pageNum" component={ArticleList} />
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

