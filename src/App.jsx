import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <div className="flex justify-center items-center h-screen bg-green-500">
        <div>
          <Navbar />
          <Routes>
            <Route path="/home" element={<h1 className="text-white text-3xl">Home Page</h1>} />
            <Route path="/about" element={<h1 className="text-white text-3xl">About Page</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
