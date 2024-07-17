import './App.css';
import { Routes, Route } from 'react-router-dom' 
import Layout from './components/Layout'
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Reachout from './components/Reachout';
import SideBar from './components/SideBar';

function App() {
  return (
    <div>
      <Navbar />
      <SideBar />
      <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path='Projects' element={<Projects />} />
        <Route path='Reachout' element={<Reachout />} />
      </Route>
    </Routes>

    </div>
    
     
    
  );
}

export default App;
