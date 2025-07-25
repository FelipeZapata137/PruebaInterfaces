import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button, Container, Form, Tab, Tabs } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import crimsonToneLogo from '../assets/CrimsonTone.jpg';
import prsBackground from '../assets/PRS.webp';

import './Login.css';

function Login() {
  const [key, setKey] = useState('login');

  useEffect(() => {
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
      currentYearElement.textContent = new Date().getFullYear();
    }
  }, []);

  const headerStyle = {
    backgroundImage: `url(${prsBackground})`,
  };

  return (
    <>
      <header className="hero-section" id="guitarras-home" style={headerStyle}>
        <Navbar expand="lg" className="navbar">
          <Container fluid>
            <Navbar.Brand as={Link} to="/">
              <img src={crimsonToneLogo} alt="CrimsonTone Logo" className="logo-img" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="main-nav-collapse" />
            <Navbar.Collapse id="main-nav-collapse">
              <Nav className="ms-auto main-nav-list">
                <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                <Nav.Link as={Link} to="/guitarras">Guitarras</Nav.Link>
                <Nav.Link as={Link} to="/#quienes-somos">¿Quiénes Somos?</Nav.Link>
                <Nav.Link as={Link} to="/#cobertura">Cobertura</Nav.Link>
                <Nav.Item>
                  <Nav.Link as={Link} to="/login" className="btn-login active-link-style">Login</Nav.Link>
                </Nav.Item>
                <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className="hero-content">
          <h1>ACCESO</h1>
          <p>Inicia sesión o regístrate para acceder a tu cuenta.</p>
        </div>
      </header>

      <main className="auth-section">
        <Container className="auth-container">
          <Tabs
            id="auth-tabs-controlled"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3 auth-tabs"
            unmountOnExit
          >
            <Tab eventKey="login" title="Iniciar Sesión" tabClassName="tab-button">
              <div id="login-form" className="auth-form">
                <h2>Iniciar Sesión</h2>
                <Form>
                  <Form.Group className="form-group" controlId="login-email">
                    <Form.Label>Correo Electrónico:</Form.Label>
                    <Form.Control type="email" name="email" required />
                  </Form.Group>
                  <Form.Group className="form-group" controlId="login-password">
                    <Form.Label>Contraseña:</Form.Label>
                    <Form.Control type="password" name="password" required />
                  </Form.Group>
                  <Button type="submit" className="btn">Acceder</Button>
                </Form>
              </div>
            </Tab>

            <Tab eventKey="register" title="Registrarse" tabClassName="tab-button">
              <div id="register-form" className="auth-form">
                <h2>Registrarse</h2>
                <Form>
                  <Form.Group className="form-group" controlId="register-username">
                    <Form.Label>Nombre de Usuario:</Form.Label>
                    <Form.Control type="text" name="username" required />
                  </Form.Group>
                  <Form.Group className="form-group" controlId="register-email">
                    <Form.Label>Correo Electrónico:</Form.Label>
                    <Form.Control type="email" name="email" required />
                  </Form.Group>
                  <Form.Group className="form-group" controlId="register-password">
                    <Form.Label>Contraseña:</Form.Label>
                    <Form.Control type="password" name="password" required />
                  </Form.Group>
                  <Form.Group className="form-group" controlId="register-confirm-password">
                    <Form.Label>Confirmar Contraseña:</Form.Label>
                    <Form.Control type="password" name="confirm_password" required />
                  </Form.Group>
                  <Button type="submit" className="btn">Crear Cuenta</Button>
                </Form>
              </div>
            </Tab>
          </Tabs>
        </Container>
      </main>

      <footer className="main-footer" id="contacto-footer">
        <Container className="footer-content">
          <div className="social-media">
            <h4>Nuestras Redes</h4>
            <ul>
              <li><a href="https://instagram.com/Crimson_Tone" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i> Crimson_Tone</a></li>
              <li><a href="https://facebook.com/CrimsonToneEcuador" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i> Crimson Tone Ecuador</a></li>
            </ul>
          </div>
          <div className="contact-info">
            <h4>Contacto</h4>
            <p>Correo electrónico: <a href="mailto:crimson@tone.com">crimson@tone.com</a></p>
            <p>Contacto: + 593 987 269 974</p>
          </div>
          <div className="copyright">
            <p>© <span id="current-year"></span> Crimson Tone. Derechos Reservados.</p>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Login;