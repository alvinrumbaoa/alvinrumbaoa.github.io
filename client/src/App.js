import React, {useState, useEffect} from 'react';
import Homepage from './components/Homepage';
import './App.css';
import Header from './components/Header';
import {
  createHistory,
  LocationProvider,
  Router
} from "@reach/router";
import createHashSource from 'hash-source';
import About from './components/About';



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
      <Header  to="/home" activeClassName="active-link" onClick={() => closeMenu()} exact/>
    <Homepage path="/"/>
    <About path="/about"/>
    {/* <Skills path="/skills"/> */}

    </div>
    </LocationProvider>
  );
}

export default App;
