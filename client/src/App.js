import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppNavbar from './components/Navbar';
import Home from './components/home';

function App() {
  return (
    <div className="App">
    <AppNavbar/>
    <Home />
    </div>
  );
}

export default App;
