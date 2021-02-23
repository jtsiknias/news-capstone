import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Article = ({ details }) => {
    const list = details.slice(1, 12);
    return list.map((article) => {
        return (
            <li key={article.id} className='list-group-item'>
                {article.title}
            </li>
        );
    });
};

export default Article;
