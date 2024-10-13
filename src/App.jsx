import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './MainPage';
import { AppRoutes } from './AppRoutes';
import ProductPage from './Product';
import paths from './utilities/pathnames';
import MainLayout from './MainLayout';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <MainPage /> */}
        {/* <AppRoutes/> */}
        <MainLayout/>
      </div>
    </Router>
  );
}

export default App;
