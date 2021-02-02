import logo from './logo.svg';
import Axios from 'axios';
import './App.css';

function App() {
    Axios({
        method: 'GET',
        url:
            'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI',
        params: {
            q: 'top headlines',
            pageNumber: '1',
            pageSize: '10',
            autoCorrect: 'true',
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
    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className='App-link'
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
