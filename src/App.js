import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/Homepage';
import Header from './components/Header';
import LoadingIndicator from './components/LoadingIndicator';

function App() {
  return (
    <div>
      <Header />
      <Homepage />
      <LoadingIndicator />
    </div>
  );
}

export default App;
