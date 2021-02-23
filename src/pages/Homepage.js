import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MainArticle from '../components/MainArticle';
import ArticleList from '../components/ArticleList';
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
            console.log(data.value);
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
        <Container>
            <Row>
                <Col>
                    <ul className='list-group list-group-flush'>
                        {newsData.length > 0 && (
                            <ArticleList details={newsData} />
                        )}
                    </ul>
                </Col>
                <Col>
                    <div>
                        {newsData.length > 0 && (
                            <MainArticle details={newsData} />
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Homepage;
