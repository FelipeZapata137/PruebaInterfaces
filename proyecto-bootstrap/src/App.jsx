import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componentes/Home.jsx';
import Login from './componentes/Login.jsx';
import Guitarras from './componentes/Guitarras.jsx';
import Pago from './componentes/Pago.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/guitarras" element={<Guitarras />} />
        <Route path="/pago" element={<Pago />} />
      </Routes>
    </Router>
  );
}

export default App;