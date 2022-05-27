import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from './components/header/index'
import AboutGT from './components/about/index'
import SkillsGT from './components/skills/index'
import EducationGT from './components/education/index'
import ContactGT from './components/contact/index'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>

        <Navbar/>  

          <Routes>
            <Route path="/" element={<AboutGT />}/>
            <Route path="/about" element={<AboutGT />}/>
            <Route path="/skills" element={<SkillsGT/>}/>
            <Route path="/education" element={<EducationGT />}/>
            <Route path="/contact" element={<ContactGT 
              nameOne="Aurelia Martinez"
              nameTwo="aurimar@mail.com"
              nameThree="Quiero trabajar con ustedes :D!"
            />}/>
          </Routes>
        </BrowserRouter>
             
      </header>
    </div>
  );
}

export default App;
