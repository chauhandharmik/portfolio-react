import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header.js'
import Services from "./components/Services.js";
import RecentProjects from './components/RecentProjects.js';
import About from './components/About.js'
function App() {
  return (
    <div>
      
               <Navigation/>
               <Header/>
               <About/>
               <Services/>
               <RecentProjects/>

      
    </div>
  );
}

export default App;
