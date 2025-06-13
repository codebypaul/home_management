// 
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
// pages
import HomePage from './pages/HomePage'
import FinancesPage from './pages/FinancesPage'

// components
import NavBar from './components/Navbar'
// style
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/finance" element={<FinancesPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
