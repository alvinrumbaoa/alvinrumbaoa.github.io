import React from 'react';
import Homepage from './components/Homepage';
import Skills from './components/Skills';
import './App.css';
import {Router} from '@reach/router';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
          <Homepage path="/"/>
          <Skills path="/skills"/>
      </Router>

    </div>
  );
}

export default App;
