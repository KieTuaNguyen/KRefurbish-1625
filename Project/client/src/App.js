import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SurveyForm from './components/SurveyForm';
import Update from './components/Update';
import Detail from './components/Detail';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Impact from './components/Impact';

function App() {
  return (
    <div className="app-container d-flex flex-column min-vh-100">
      <NavBar />
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey" element={<SurveyForm />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/view/:id" element={<Detail />} />
          <Route path="/impact" element={<Impact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;