import React from 'react';
import { Row, Col } from 'react-bootstrap';

const MainArticle = ({ details }) => {
    return details.map((article) => {
        return <li className='list-group-item'>{article.title}</li>;
    });
};

export default MainArticle;
