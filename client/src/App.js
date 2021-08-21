import React, {useEffect} from 'react';
import Homepage from './components/Homepage';
import Skills from './components/Skills';
import './App.css';
import Header from './components/Header';
import {
  createHistory,
  LocationProvider,
  Router
} from "@reach/router";
import createHashSource from 'hash-source'

let source = createHashSource();
let history = createHistory(source)


  
function App() {


  useEffect(() => {
    document.title = "Alvin Rumbaoa | Full Stack Web Developer";
    }, [])
  return (
    <LocationProvider history={history}>
    <div className="App">
      <Header/>
    <Homepage path="/"/>
    {/* <Skills path="/skills"/> */}

    </div>
    </LocationProvider>
  );
}

export default App;
