import React from 'react';
// import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import '../styles/SidePanel.css';

const SidePanel = ({ details }) => {
  // <FeaturedArticle />
  //   const featured = details[12];
  const additionalArticles = details.slice(13, 16);

  return (
    <div>
      <ListGroup variant='flush'>
        {additionalArticles.map((article) => {
          return (
            <ListGroup.Item
              key={article.id}
              className='SidePanel__item border-bottom pl-0'
            >
              <a href={article.url} target='_blank' rel='noreferrer'>
                {article.title}
              </a>
              <p className='SidePanel__description text-muted mt-2'>
                {article.description}
              </p>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default SidePanel;
