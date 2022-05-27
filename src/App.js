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
            <Route path="/about" element={<AboutGT />}/>
            <Route path="/skills" element={<SkillsGT/>}/>
            <Route path="/education" element={<EducationGT />}/>
            <Route path="/contact" element={<ContactGT 
              nameZero="Ingrese nombre"
              nameOne="Ingrese su correo electronico"
              nameTwo="Ingrese el asunto"
              nameThree="Ingrese el mensaje"
            />}/>
          </Routes>
        </BrowserRouter>
             
      </header>
    </div>
  );
}

export default App;
