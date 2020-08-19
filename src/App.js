import React from 'react'
import Header from './components/Header'
import Projects from './components/Projects'


import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="grid-container">
        <Header />
        <Projects />
      </div>
    </div>
  );
}

export default App;
