import './App.css';
import MainHeader from './Components/MainHeader.js';
import MainFooter from './Components/MainFooter.js'

import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import Projects from './pages/Projects.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Articles from './pages/Articles.js';

import ArticleTemplate from './pages/ArticleTemplate.js';
import ArticleMOBA from './pages/Articles/mobaCharacter.js';
import ArticleRotator from './pages/Articles/rotatorBoss.js';
import ArticleSoulSwap from './pages/Articles/soulSwap.js';
import ArticlePotionsCollectibles from './pages/Articles/potionsCollectibles.js';

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


        <Route path="/article-template" element={<ArticleTemplate />} />
        <Route path="/moba-character" element={<ArticleMOBA />} />
        <Route path="/rotator-boss" element={<ArticleRotator />} />
        <Route path="/soulswap" element={<ArticleSoulSwap />} />
        <Route path="/potions-collectibles" element={<ArticlePotionsCollectibles />} />
      </Routes>
      
      <MainFooter />
    </>
  );
}



export default App;
