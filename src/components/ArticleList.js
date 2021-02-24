import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import '../styles/ArticleList.css';

const ArticleList = ({ details }) => {
    const list = details.slice(1, 12);
    return list.map((article) => {
        return (
            <ListGroup.Item key={article.id} className='ArticleList__item'>
                <a href={article.url} target='_blank' rel='noreferrer'>
                    {article.title}
                </a>
            </ListGroup.Item>
        );
    });
};

export default ArticleList;
