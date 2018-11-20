import { NO_MATCH } from 'Constant';

export const getMdURL = title => `http://hukua-blog.oss-cn-beijing.aliyuncs.com/posts/${title}.md`;

export const getPageNum = pageNumStr => {
  if(/^[0-9]+$/.test(pageNumStr)) {
    return parseInt(pageNumStr);
  }
  return NO_MATCH;
}