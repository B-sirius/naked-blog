import React, { PureComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import { fetchArticle } from 'Posts'

import './markdown.css';
import './style.scss';

export default class ArticleContent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      article: ``,
    }
  }

  componentDidMount() {
    fetchArticle()
      .then(response => response.text())
      .then(text => {
        this.setState({
          article: text
        })
      });
  }

  render() {
    const { article } = this.state;

    return (
      <div className='article-container'>
        <div className="post-content">
          <article className="markdown-body">
            <ReactMarkdown
              source={article}
            />
          </article>
        </div>
      </div>
    )
  }
}