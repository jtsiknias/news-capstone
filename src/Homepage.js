import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Container from 'react-bootstrap/Container';

function Homepage() {
    const [data, setData] = useState({});

    useEffect(() => {
        const method = 'GET';
        const url =
            'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI';
        const params = {
            q: 'united states news',
            pageNumber: '1',
            pageSize: '25',
            autoCorrect: 'true',
            withThumbnails: 'true',
            fromPublishedDate: 'null',
            toPublishedDate: 'null',
        };

        const headers = {
            'Content-Type': 'application/json',
            'x-rapidapi-key':
                '9d3c2abe39msh77772478b03e4ecp1a2b09jsneb4c0b18252f',
            'x-rapidapi-host':
                'contextualwebsearch-websearch-v1.p.rapidapi.com',
        };
        const fetchData = async () => {
            const result = await Axios({ method, url, params, headers });
            const rep = result.data.value;
            setData(rep);
        };
        fetchData();
    }, []);
    return (
        <div className='App'>
            <header className='App-header'>
                <Container className='d-flex flex-column'>
                    {data.length > 0 &&
                        data.map((article) => (
                            <li key={article.id}>{article.title}</li>
                        ))}
                </Container>
            </header>
        </div>
    );
}

export default Homepage;
