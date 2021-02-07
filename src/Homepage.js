import fetchArticles from './api';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const Homepage = () => {
    console.log(fetchArticles());
    return (
        <div className='App'>
            <header className='App-header'>
                <Container className='d-flex flex-column'>
                    <Button className='mb-3'>Home</Button>
                    <Button>Test - Test</Button>
                </Container>
            </header>
        </div>
    );
};

export default Homepage;
