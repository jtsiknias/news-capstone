import React from 'react';
const FeaturedArticle = (article) => {
  return <img alt={article.article.title} src={article.article.image.url} />;
};

export default FeaturedArticle;
