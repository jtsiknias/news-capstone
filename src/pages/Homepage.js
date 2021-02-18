import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Article from '../components/Article';
import getAPI from '../helpers/APIHelpers';

function Homepage() {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        const params = {
            q: 'united states news',
            pageNumber: '1',
            pageSize: '25',
            autoCorrect: 'true',
            withThumbnails: 'true',
            fromPublishedDate: 'null',
            toPublishedDate: 'null',
        };

        const onSuccess = (data) => {
            setNewsData(data.value);
        };

        const onError = (err) => {
            console.log(err);
            alert('Something went wrong');
        };

        getAPI(
            'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI',
            params,
            onSuccess,
            onError
        );
    }, []);
    return (
        <Container className='articlesContainer'>
            {newsData.length > 0 &&
                newsData.map((article) => {
                    return <Article key={article.id} details={article} />;
                })}
        </Container>
    );
}

export default Homepage;
