import './App.css';
import MainHeader from './Components/MainHeader.js';
import MainFooter from './Components/MainFooter.js'

import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import Projects from './pages/Projects.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Articles from './pages/Articles.js';

function App() {
  return (
    <>
      <MainHeader />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
      
      <MainFooter />
    </>
  );
}



export default App;
