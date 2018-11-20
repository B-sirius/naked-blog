import React, { PureComponent } from 'react';
import './style.scss';

const links = [
  {
    name: 'Github',
    url: 'https://github.com/b-sirius',
    imgUrl: 'http://hukua-blog.oss-cn-beijing.aliyuncs.com/assets/github.svg',
  },
  {
    name: 'CodePen',
    url: 'https://codepen.io/padfoot_07/',
    imgUrl: 'http://hukua-blog.oss-cn-beijing.aliyuncs.com/assets/codepen.svg',
  },
  {
    name: '豆瓣',
    url: 'https://www.douban.com/people/121516026/',
    imgUrl: 'http://hukua-blog.oss-cn-beijing.aliyuncs.com/assets/%E8%B1%86%E7%93%A3.svg',
  },
  {
    name: 'Email',
    url: 'mailto:padfoot_07@163.com',
    imgUrl: 'http://hukua-blog.oss-cn-beijing.aliyuncs.com/assets/email.svg',
  },
]

export default class Footer extends PureComponent {
  render() {
    return (
      <div className='footer'>
        {
          links.map((item, index) => (
            <a href={item.url} target='_blank' className='footer-link-btn' key={index} rel='noopener noreferrer'>
              <div className='footer-mask'></div>
              <img alt={item.name} className='footer-icon' src={item.imgUrl} />
              <span className='footer-text'>
                {item.name}
              </span>
            </a>
          ))
        }
      </div>
    );
  }
}

