import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Doctors from './components/Doctors';
import Blog from './components/Blog';
import SleepDisorder from './pages/SleepDisorder';
import AnxietyPrediction from './pages/AnxietyPrediction';
import DepressionPrediction from './pages/DepressionPrediction';
import NutritionalPrediction from './pages/NutritionalPrediction';
import Contact from './components/contact';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/sleep-disorder" element={<SleepDisorder />} />
        <Route path="/anxiety-prediction" element={<AnxietyPrediction />} />
        <Route path="/depression-prediction" element={<DepressionPrediction />} />
        <Route path="/nutritional-prediction" element={<NutritionalPrediction />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;