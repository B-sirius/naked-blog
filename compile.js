const postsList = require('./src/posts/posts.json');
const fs = require('fs');

function getTagMap() {
  const map = {};
  for (let item of postsList) {
    for (let tag of item.tags) {
      if  (!map[tag]) map[tag] = [];
      map[tag].push(item);
    }
  }

  return map;
}

function getCategoryMap() {
  const map = {};
  for (let item of postsList) {
    const {categories} = item; 
    if (!map[categories]) map[categories] = [];
    map[categories].push(item);
  }

  return map;
}

const tagMap = getTagMap();
const categoryMap = getCategoryMap();

fs.writeFile('./src/posts/tagMap.json', JSON.stringify(tagMap), (err) => {
  if (!err) console.log('tagMap write done !');
});

fs.writeFile('./src/posts/categoryMap.json', JSON.stringify(categoryMap), (err) => {
  if (!err) console.log('categoryMap write done !');
});

