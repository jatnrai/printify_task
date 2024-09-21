// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import ErrorPage from './Components/ErrorPage/404Error'; // Create this component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;