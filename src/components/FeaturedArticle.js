import React from 'react';
import Image from 'react-bootstrap/Image';
import '../styles/FeaturedArticle.css';

const FeaturedArticle = ({ details }) => {
    const featured = details[12];
    const additionalArticles = details.slice(13, 2);
    console.log(featured);
    return (
        <div>
            <a href={featured.url}>
                <Image src={featured.image.url} fluid />
            </a>
            <h2 className='FeaturedArticle__title mt-3'>
                <a href={featured.url}>{featured.title}</a>
            </h2>
        </div>
    );
};

export default FeaturedArticle;
