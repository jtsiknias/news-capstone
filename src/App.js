import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/Homepage';
import LoadingIndicator from './components/LoadingIndicator';

function App() {
    return (
        <div>
            <Homepage />
            <LoadingIndicator />
        </div>
    );
}

export default App;
