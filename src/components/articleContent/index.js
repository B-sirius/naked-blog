import React, { PureComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import { fetchArticle } from '@posts'

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
      <ReactMarkdown
        source={article}
      />
    )
  }
}