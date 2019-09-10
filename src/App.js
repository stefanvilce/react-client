import React from 'react';
import logo from './logo.svg';
import AddPages from './components/AddPages';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <div className="nav-wrapper center-align">
          <a href="/" className="brand-logo">Home</a>
        </div>
      </nav>
      <div className="row">
        <AddPages />
      </div>
    </div>
  );
}

export default App;
