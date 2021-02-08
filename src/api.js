import Axios from 'axios';

async function fetchArticles() {
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
        'x-rapidapi-key': '9d3c2abe39msh77772478b03e4ecp1a2b09jsneb4c0b18252f',
        'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
    };

    const articles = await Axios({ method, url, params, headers });
    return articles.data.value;
}

export default fetchArticles;
