import React, { useEffect, useState } from 'react';
import Homepage from './components/Homepage';
import './App.css';
import Header from './components/Header';
import ResumeViewer from './components/ResumeViewer';
import { Switch, Route, } from "react-router-dom";
import About from './components/About';
import Projects from './components/Projects';
import NotFound from './components/NotFound'

function App() {

    return ( 
    <div className = "App" >

        <Header />
        <Switch >
        <Route path = "/alvinrumbaoa.github.io/image">
        <ResumeViewer />
        
        </Route>  
        <Route path = "/alvinrumbaoa.github.io">
        <Homepage />
        </Route>  
        <Route path = "alvinrumbaoa.github.io/about"component = { About }/>  
        <Route path = "alvinrumbaoa.github.io/projects" component = { Projects }/>  
        <Route path = "alvinrumbaoa.github.io/404" component = { NotFound }/> </Switch> 
        </div>
    );
}


export default App;