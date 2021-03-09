import React from 'react';
const FeaturedArticle = (article) => {
  return <img src={article.article.image.url} />;
};

export default FeaturedArticle;
