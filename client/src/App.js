import React, {useState, useEffect} from 'react';
import Homepage from './components/Homepage';
import './App.css';
import Header from './components/Header';
import ResumeViewer from './components/ResumeViewer';


function App() {

  const [setNavbarOpen] = useState(false);

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
      <Homepage path="/home"/>
      <ResumeViewer path="/image"/>
    </div>
    </LocationProvider>
  );
}


export default App;
