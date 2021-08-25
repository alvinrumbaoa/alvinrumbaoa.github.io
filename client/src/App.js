import React, {useState, useEffect} from 'react';
import Homepage from './components/Homepage';
import './App.css';
import Header from './components/Header';
import ResumeViewer from './components/ResumeViewer';
import {
  createHistory,
  LocationProvider,
  Router
} from "@reach/router";
import createHashSource from 'hash-source';

function App() {

  const [navbarOpen, setNavbarOpen] = useState(false);
let source = createHashSource();
let history = createHistory(source)
const closeMenu = () => {
  setNavbarOpen(false)
}

  useEffect(() => {
    document.title = "Alvin Rumbaoa | Full Stack Web Developer";
    }, [])
  return (
    <LocationProvider history={history}>
    <div className="App">
      
    <Header  to="/" activeClassName="active-link" onClick={() => closeMenu()} exact/>

    <Router>
      <Homepage path="/"/>
      <ResumeViewer path="/image"/>
    </Router>
  
    </div>
    </LocationProvider>
  );
}


export default App;
