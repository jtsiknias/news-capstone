import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function Homepage() {
    const [data, setData] = useState({ hits: [] });

    useEffect(() => {
        const method = 'GET';
        const url =
            'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI';
        const params = {
            q: 'united states news',
            pageNumber: '1',
            pageSize: '10',
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
            setData(result);
        };
        fetchData();
    }, []);
    return (
        <div className='App'>
            <header className='App-header'>
                <Container className='d-flex flex-column'>
                    <Button className='mb-3'>Home</Button>
                    <ul>{data.data.value.map((article) => ({ article }))}</ul>
                </Container>
            </header>
        </div>
    );
}

export default Homepage;
