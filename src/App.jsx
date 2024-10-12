import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import MainPage from './MainPage';

function App() {
  return (
    <Router>
      <div className="App">
        <MainPage />
      </div>
    </Router>
  );
}

export default App;
