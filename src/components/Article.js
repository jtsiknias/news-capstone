import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Article = ({ details }) => {
    return (
        <Row className='articleCard'>
            <Col xs={12} md={4}>
                <img
                    src={details.image.url}
                    alt='article-image'
                    className='img-fluid articleImage'
                />
            </Col>
            <Col xs={12} md={8}>
                <h2>
                    <a href={details.url} className='articleTitle'>
                        {details.title}
                    </a>
                </h2>
                <p>{details.description}</p>
            </Col>
        </Row>
    );
};

export default Article;
