import React from 'react';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import '../styles/SidePanel.css';

const SidePanel = ({ details }) => {
    const featured = details[12];
    const additionalArticles = details.slice(13, 16);
    console.log(featured);
    return (
        <div>
            <a href={featured.url}>
                <Image src={featured.image.url} fluid />
            </a>
            <h2 className='SidePanel__title mt-3 border-bottom'>
                <a href={featured.url}>{featured.title}</a>
            </h2>
            <ListGroup variant='flush'>
                {additionalArticles.map((article) => {
                    return (
                        <ListGroup.Item
                            key={article.id}
                            className='SidePanel__item border-bottom pl-0'
                        >
                            <a
                                href={article.url}
                                target='_blank'
                                rel='noreferrer'
                            >
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
