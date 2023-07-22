import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Movies from './pages/Movies';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="Home" element={<Home/>}/>
        <Route path="Movies" element={<Movies/>}/>
      </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
