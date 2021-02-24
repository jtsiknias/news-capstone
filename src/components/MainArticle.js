import React from 'react';
import Image from 'react-bootstrap/Image';
import '../styles/MainArticle.css';

const MainArticle = ({ details }) => {
    const main = details[0];
    console.log(main);
    return (
        <>
            <h2 className='MainArticle__title'>
                <a href={main.url}>{main.title}</a>
            </h2>
            <p className='MainArticle__description'>{main.description}</p>
            <a href={main.url}>
                <Image src={main.image.url} fluid />
            </a>
        </>
    );
};

export default MainArticle;
