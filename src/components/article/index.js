import React, { PureComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { getMdURL } from 'Util/helper';

import './markdown.css';
import './style.scss';

export default class Article extends PureComponent {
  render() {
    return (
      <Router>
        <div className='article-container'>
          <Route path='/post/:articleTitle' component={ArticleContent} />
        </div>
      </Router>
    )
  }
}

class ArticleContent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      markdownString: '',
      foundPage: true,
    }
  }

  componentDidMount() {
    this.getMarkdownString();
  }

  // 获取markdown内容
  getMarkdownString = () => {
    const { articleTitle } = this.props.match.params;
    const url = getMdURL(articleTitle);
    fetch(url)
      .then(response => {
        if (!response.ok) {
          this.setState({
            foundPage: false
          })
          throw Error(response.statusText);
        }

        return response.text();
      })
      .then(
        text => {
          this.setState({
            markdownString: text,
            foundPage: true,
          })
        }
      )
      .catch(error => console.log(error));
  }

  // 渲染文章
  renderArticleContent = () => {
    const { markdownString, foundPage } = this.state;
    if (!foundPage) return (
      <span>shiiiit happens</span>
    )
    if (!markdownString.length) return (
      <span>loading blablabla</span>
    )
    return (
      <ReactMarkdown source={markdownString} />
    )
  }

  render() {
    const { renderArticleContent } = this;
    return (
      <div className="post-content">
        <article className="markdown-body">
          {
            renderArticleContent()
          }
        </article>
      </div>
    )
  }
}