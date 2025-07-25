import React, { useEffect } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import crimsonToneLogo from '../assets/CrimsonTone.jpg';
import '../index.css';
import './Home.css';

function Home() {
  const location = useLocation();

  useEffect(() => {
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
      currentYearElement.textContent = new Date().getFullYear();
    }

    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        const navbarHeight = document.querySelector('.navbar-custom')?.offsetHeight || 0;
        const offsetPosition = element.getBoundingClientRect().top + window.scrollY - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [location]);

  const handleNavLinkClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = document.querySelector('.navbar-custom')?.offsetHeight || 0;
      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <Navbar expand="lg" className="navbar-custom" fixed="top">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img src={crimsonToneLogo} alt="Crimson Tone Logo" className="logo-img" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-nav-collapse" />
          <Navbar.Collapse id="main-nav-collapse">
            <Nav className="ms-auto main-nav-list">
              <Nav.Link href="#home-hero-section" onClick={(e) => handleNavLinkClick(e, 'home-hero-section')}>Inicio</Nav.Link> {/* ID de la sección Hero */}
              <Nav.Link href="#quienes-somos" onClick={(e) => handleNavLinkClick(e, 'quienes-somos')}>¿Quiénes Somos?</Nav.Link>
              <Nav.Link href="#cobertura" onClick={(e) => handleNavLinkClick(e, 'cobertura')}>Cobertura</Nav.Link>
              <Nav.Link as={Link} to="/guitarras">Guitarras</Nav.Link>
              <Nav.Link href="#contacto-footer" onClick={(e) => handleNavLinkClick(e, 'contacto-footer')}>Contacto</Nav.Link>
              <Nav.Item>
                <Button as={Link} to="/login" className="btn-login">Login</Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <header className="hero-section" id="home-hero-section">
        <div className="hero-content">
          <h1>CRIMSON <span className="highlight-tone">TONE</span></h1>
          <p>Encuentra las mejores guitarras con los mejores precios</p>
          <p>Y a tu preferencia!</p>
          <Button as={Link} to="/guitarras" className="btn-explore">Explorar Guitarras</Button>
        </div>
      </header>

      <section id="quienes-somos" className="about-us-section">
        <Container>
          <h2>¿Quiénes Somos?</h2>
          <p>CrimsonTone es una tienda online de guitarras de alta gama, nos enfocamos tanto en la calidad de nuestras guitarras como en obtener los mejores precios del mercado y además con modelos de todo gusto, para todo tipo de guitarristas, desde shreders, hasta guitarristas de jazz. Todo en guitarras aquí en tu tienda favorita.</p>
          <div className="mission-vision">
            <div className="mission">
              <h3>Misión</h3>
              <p>Nuestro objetivo es proveer a nuestros compradores de guitarras de la mejor calidad y la más alta gama con precios accesibles.</p>
            </div>
            <div className="vision">
              <h3>Visión</h3>
              <p>Nuestra Visión es convertirnos en los vendedores #1 a nivel sudamerica y ampliarnos a todo el continente en un lapso de 10 años.</p> 
            </div>
            <div className="suggestions">
              <h3>Sugerencias</h3>
              <p>¡Tu opinión es importante!</p>
              <form action="#" method="POST">
                <textarea placeholder="Escribe aquí tus sugerencias..."></textarea>
                <Button type="submit">Enviar</Button>
              </form>
            </div>
          </div>
        </Container>
      </section>

      <section id="cobertura" className="coverage-section">
        <Container>
          <h2>Cobertura</h2>
          <p>Realizamos entregas a nivel sudamerica, trabajos a través de couriers internacionales certificados.</p>
          <div className="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.251408018765!2d-122.41941568468165!3d37.77492977975828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858087e5b3f27b%3A0x8f0d8b5c4f2f0b7c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1678901234567!5m2!1sen!2sus"
                    width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </Container>
      </section>

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
            <p><i className="fas fa-envelope"></i> Correo electrónico: <a href="mailto:crimson@tone.com">crimson@tone.com</a></p>
            <p><i className="fas fa-phone"></i> Contacto: + 593 987 269 974</p>
          </div>
          <div className="copyright">
            <p>© <span id="current-year"></span> Crimson Tone. Derechos Reservados.</p>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Home;