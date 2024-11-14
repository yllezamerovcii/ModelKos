import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/pages/shared/Navbar/Navbar';
import Footer from './components/pages/shared/Footer/Footer';
import Home from './pages/Home';
import Apply from './pages/Apply';
import About from './pages/About';
import Blog from './pages/Blog';
import AndaLleshi from './pages/AndaLleshi';

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/apply" element={<Apply />} /> 
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/andalleshi' element={<AndaLleshi />}/>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

