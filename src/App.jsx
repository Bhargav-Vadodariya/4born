import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Product from './components/Product';
import Ratecard from './components/Ratecard';
import Scrolltotop from './Scrolltotop';
import Contact from './components/Contact';
import Python from './components/Python';
import Nodejs from './components/Nodejs';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import PHP from './components/PHP';
import Blockchain from './components/Blockchain';
import Branding from './components/Branding';
import Bigdata from './components/Bigdata';

function App() {
  return (
    <div>
      <div className="app">
        <Scrolltotop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/product" element={<Product />} />
          <Route path="/Ratecard" element={<Ratecard />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Python" element={<Python />} />
          <Route path="/Nodejs" element={<Nodejs />} />
          <Route path="/Php development" element={<PHP />} />
          <Route path="/Blockchain" element={<Blockchain />} />
          <Route path="/Branding" element={<Branding />} />
          <Route path="/Bigdata" element={<Bigdata />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
