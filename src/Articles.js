import Axios from 'axios';

function Articles() {
    const articles = Axios({
        method: 'GET',
        url:
            'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI',
        params: {
            q: 'united states news',
            pageNumber: '1',
            pageSize: '10',
            autoCorrect: 'true',
            withThumbnails: 'true',
            fromPublishedDate: 'null',
            toPublishedDate: 'null',
        },
        headers: {
            'Content-Type': 'application/json',
            'x-rapidapi-key':
                '9d3c2abe39msh77772478b03e4ecp1a2b09jsneb4c0b18252f',
            'x-rapidapi-host':
                'contextualwebsearch-websearch-v1.p.rapidapi.com',
        },
    }).then((res) => {
        console.log(res.data.value);
    });
    return articles;
}

export default Articles;
