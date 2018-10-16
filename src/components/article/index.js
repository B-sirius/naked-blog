import React, { PureComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './markdown.css';
import './style.scss';

const getMdURL = (title) => `http://hukua-blog.oss-cn-beijing.aliyuncs.com/posts/${title}.md`;

export default class Article extends PureComponent {
  render() {
    return (
      <Router>
        <div className='article-container'>
          <Route path='/posts/:articleTitle' component={ArticleContent} />
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

  // 获取markdown内容
  getMarkdownString = () => {
    const { articleTitle } = this.props.match.params;
    const url = getMdURL(articleTitle);
    fetch(url)
      .then(response => {
        console.log(response)
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
    console.log('shit', markdownString)
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

  componentDidMount() {
    this.getMarkdownString();
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
