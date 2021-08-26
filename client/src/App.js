import React, {useEffect} from 'react';
import Homepage from './components/Homepage';
import './App.css';
import Header from './components/Header';
import ResumeViewer from './components/ResumeViewer';
import { Switch, Route,} from "react-router-dom";

function App() {

  useEffect(() => {
    document.title = "Alvin Rumbaoa | Full Stack Web Developer";
    }, [])
  return (
  
    <div className="App">
      <Header/>
      <Switch> 
          <Route path="/alvinrumbaoa.github.io/image">
            <ResumeViewer />
          </Route>
          <Route path ="/alvinrumbaoa.github.io/">
            <Homepage/>
          </Route>
      </Switch>

    </div>
  );
}


export default App;
