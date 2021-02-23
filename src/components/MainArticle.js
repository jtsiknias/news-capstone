import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const MainArticle = ({ details }) => {
    const main = details[0];
    console.log(main);
    return <h1>{main.title}</h1>;
};

export default MainArticle;
