import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import crimsonToneLogo from '../assets/CrimsonTone.jpg';
import prsBackground from '../assets/PRS.webp';
import fenderAmericanDeluxe from '../assets/Fender American Deluxe.jpg';
import gibsonLesPaul50s from '../assets/Gibson Les Paul Standard 50s.webp';
import ibanezJemVai from '../assets/Ibanez Jem Steve Vai Signature.jpg';
import fenderTelecasterProfII from '../assets/Fender Telecaster American Professional II.jpg';
import gibsonEds1275 from '../assets/Gibson EDS-1275 Doubleneck.jpg';
import prsSeCustom24 from '../assets/PRS SE Custom 24.jpg';
import epiphoneCasino from '../assets/Epiphone Casino.webp';
import gibsonSg from '../assets/Gibson SG.jpg';
import ibanezGioGrx70 from '../assets/Ibanez Gio GRX70.jpg';
import '../index.css';
import './Guitarras.css';


function Guitarras() {
  const navigate = useNavigate();
  const [cartItemCount, setCartItemCount] = useState(0);

  const [guitars, setGuitars] = useState([
    {
      id: 'fender-american-deluxe',
      nombre: 'Fender Stratocaster American Deluxe',
      descripcion: 'Versatilidad moderna con hardware avanzado y un sonido Stratocaster impecable.',
      precio: 950,
      imagen: fenderAmericanDeluxe,
      rating: 4,
      specs: {
        microfonos: 'Single-coil (Fender N3 Noiseless)',
        mastrill: 'Arce (Maple)',
        cuerpo: 'Aliso (Alder)',
        puente: 'Semi-flotante (Trémolo Sincronizado de 2 puntos con Selletas de Acero Dobladas)',
      },
      showSpecs: false,
      isFavorited: false,
    },
    {
      id: 'gibson-les-paul-50s',
      nombre: 'Gibson Les Paul Standard 50s',
      descripcion: 'El tono clásico y potente de los años 50 con humbuckers PAF y un sustain legendario.',
      precio: 2500,
      imagen: gibsonLesPaul50s,
      rating: 4.5,
      specs: {
        microfonos: 'Humbucker (BurstBucker 1 & BurstBucker 2)',
        mastrill: 'Caoba',
        cuerpo: 'Caoba con tapa de Arce',
        puente: 'Fijo (ABR-1 Tune-O-Matic)',
      },
      showSpecs: false,
      isFavorited: false,
    },
    {
      id: 'ibanez-jem-vai',
      nombre: 'Ibanez Jem Steve Vai Signature',
      descripcion: 'Diseñada para la expresión ilimitada y la velocidad. El arma definitiva para shredders.',
      precio: 750,
      imagen: ibanezJemVai,
      rating: 5,
      specs: {
        microfonos: 'Humbucker/Single/Humbucker (DiMarzio Evolution H/S/H)',
        mastrill: 'Arce/Nogal (5 piezas)',
        cuerpo: 'Aliso',
        puente: 'Floyd Rose (Trémolo Edge)',
      },
      showSpecs: false,
      isFavorited: false,
    },
    {
      id: 'fender-telecaster-prof-ii',
      nombre: 'Fender Telecaster American Prof. II',
      descripcion: 'El icónico "twang" y la fiabilidad de la Telecaster, mejorados para el guitarrista moderno.',
      precio: 700,
      imagen: fenderTelecasterProfII,
      rating: 4.5,
      specs: {
        microfonos: 'Single-coil (Fender V-Mod II Single-Coil Tele)',
        mastrill: 'Arce',
        cuerpo: 'Aliso o Fresno',
        puente: 'Fijo (Telecaster Top-Load/String-Through)',
      },
      showSpecs: false,
      isFavorited: false,
    },
    {
      id: 'gibson-eds-1275',
      nombre: 'Gibson EDS-1275 Doubleneck',
      descripcion: 'El legendario doble mástil que define el rock clásico. Versatilidad de 6 y 12 cuerdas.',
      precio: 9000,
      imagen: gibsonEds1275,
      rating: 5,
      specs: {
        microfonos: 'Humbucker (Custombucker Alnico III)',
        mastrill: 'Caoba',
        cuerpo: 'Caoba',
        puente: 'Fijo (Tune-O-Matic en ambos mástiles)',
      },
      showSpecs: false,
      isFavorited: false,
    },
    {
      id: 'prs-se-custom-24',
      nombre: 'PRS SE Custom 24',
      descripcion: 'La calidad y el diseño de PRS en un paquete accesible, con tono y facilidad de ejecución.',
      precio: 880,
      imagen: prsSeCustom24,
      rating: 4,
      specs: {
        microfonos: 'Humbucker (PRS 85/15 "S")',
        mastrill: 'Arce con diapasón de Palo de Rosa',
        cuerpo: 'Caoba con tapa de Arce',
        puente: 'Semi-flotante (Trémolo Patentado PRS)',
      },
      showSpecs: false,
      isFavorited: false,
    },
    {
      id: 'epiphone-casino',
      nombre: 'Epiphone Casino',
      descripcion: 'Un clásico semi-hueco con un sonido cálido y resonante, ideal para blues y rock.',
      precio: 650,
      imagen: epiphoneCasino,
      rating: 4,
      specs: {
        microfonos: 'Single-coil (P-90 Dogear)',
        mastrill: 'Caoba',
        cuerpo: 'Arce Laminado de 5 capas',
        puente: 'Fijo (LockTone Tune-O-Matic)',
      },
      showSpecs: false,
      isFavorited: false,
    },
    {
      id: 'gibson-sg',
      nombre: 'Gibson SG',
      descripcion: 'Un diseño agresivo con un tono crudo y poderoso. Ideal para rock, blues y metal.',
      precio: 750,
      imagen: gibsonSg,
      rating: 4,
      specs: {
        microfonos: 'Humbucker (61R & 61T Burstbuckers)',
        mastrill: 'Caoba',
        cuerpo: 'Caoba',
        puente: 'Fijo (ABR-1 Tune-O-Matic)',
      },
      showSpecs: false,
      isFavorited: false,
    },
    {
      id: 'ibanez-gio-grx70',
      nombre: 'Ibanez Gio GRX70',
      descripcion: 'Una excelente opción para principiantes y rockeros, con un mástil rápido y pastillas versátiles.',
      precio: 800,
      imagen: ibanezGioGrx70,
      rating: 4,
      specs: {
        microfonos: 'Humbucker/Single/Humbucker (Ibanez Infinity R/RS/R)',
        mastrill: 'Arce',
        cuerpo: 'Álamo',
        puente: 'Semi-flotante (Trémolo T106)',
      },
      showSpecs: false,
      isFavorited: false,
    },
  ]);


  useEffect(() => {
    const currentYearElement = document.getElementById('current-year-footer');
    if (currentYearElement) {
      currentYearElement.textContent = new Date().getFullYear();
    }
    updateCartItemCount();
  }, []);

  const updateCartItemCount = () => {
    const storedCart = JSON.parse(localStorage.getItem('carrito')) || [];
    let totalItems = 0;
    storedCart.forEach(item => {
      totalItems += item.cantidad;
    });
    setCartItemCount(totalItems);
  };

  const handleToggleSpecs = (id) => {
    setGuitars(prevGuitars =>
      prevGuitars.map(guitar =>
        guitar.id === id ? { ...guitar, showSpecs: !guitar.showSpecs } : guitar
      )
    );
  };

  const handleToggleFavorite = (id) => {
    setGuitars(prevGuitars =>
      prevGuitars.map(guitar =>
        guitar.id === id ? { ...guitar, isFavorited: !guitar.isFavorited } : guitar
      )
    );
  };

  const handleAddToCart = (guitarToAdd) => {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    const itemExistente = carrito.find(item => item.id === guitarToAdd.id);

    if (itemExistente) {
      itemExistente.cantidad += 1;
    } else {
      carrito.push({
        id: guitarToAdd.id,
        nombre: guitarToAdd.nombre,
        precio: guitarToAdd.precio,
        imagen: guitarToAdd.imagen,
        cantidad: 1
      });
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert(`${guitarToAdd.nombre} ha sido añadido al carrito. Redirigiendo a la página de pago.`);
    updateCartItemCount();
    navigate('/pago');
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<i key={i} className="fas fa-star"></i>);
      } else if (rating > i - 1 && rating < i) {
        stars.push(<i key={i} className="fas fa-star-half-alt"></i>);
      } else {
        stars.push(<i key={i} className="far fa-star"></i>);
      }
    }
    return stars;
  };

  return (
    <>
      <header className="hero-section" id="guitarras-home">
        <Navbar expand="lg" className="navbar">
          <Container fluid>
            <Navbar.Brand as={Link} to="/">
              <img src={crimsonToneLogo} alt="Crimson Tone Logo" className="logo-img" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="main-nav-collapse" />
            <Navbar.Collapse id="main-nav-collapse">
              <Nav className="ms-auto main-nav-list">
                <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                <Nav.Link as={Link} to="/#quienes-omos">¿Quiénes Somos?</Nav.Link>
                <Nav.Link as={Link} to="/#cobertura">Cobertura</Nav.Link>
                <Nav.Link as={Link} to="/guitarras">Guitarras</Nav.Link>
                <Nav.Link as={Link} to="/#contacto-footer">Contacto</Nav.Link>
                <Nav.Item className="cart-link">
                  <Nav.Link as={Link} to="/pago">
                    <i className="fas fa-shopping-cart"></i> Carrito ({cartItemCount})
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="hero-content">
          <h1>NUESTRAS <span className="highlight-tone">GUITARRAS</span></h1>
          <p>Encuentra la inspiración en cada cuerda y diseño</p>
          <p>¡Para cada estilo y nivel!</p>
          <Button as={Link} to="#guitarras-disponibles" className="btn">Explorar Modelos</Button>
        </div>
      </header>

      <main>
        <section id="guitarras-disponibles" className="guitars-listing-section">
          <Container>
            <h2>Modelos Disponibles</h2>
            <p>Explora nuestra exclusiva selección de guitarras eléctricas, acústicas y bajos.</p>

            <div className="guitar-grid">
              {guitars.map(guitar => (
                <div className="guitar-card" key={guitar.id}>
                  <div className="image-container">
                    <img src={guitar.imagen} alt={`Guitarra ${guitar.nombre}`} />
                    <div
                      className={`favorite-icon-container ${guitar.isFavorited ? 'favorited' : ''}`}
                      onClick={() => handleToggleFavorite(guitar.id)}
                    >
                      <i className="fas fa-heart"></i>
                    </div>
                  </div>
                  <h3>{guitar.nombre}</h3>
                  <p className="description">{guitar.descripcion}</p>
                  <div className="card-bottom-info">
                    <div className="rating">
                      {renderStars(guitar.rating)}
                    </div>
                    <p className="price">${guitar.precio.toFixed(2)}</p>
                    <div
                      className="info-toggle add-to-cart"
                      onClick={() => handleAddToCart(guitar)}
                    >
                      <i className="fas fa-shopping-cart"></i> Añadir
                    </div>
                  </div>
                  <div className="details-toggle">
                    <button
                      className="btn btn-small view-details-btn"
                      onClick={() => handleToggleSpecs(guitar.id)}
                    >
                      {guitar.showSpecs ? 'Ocultar Detalles' : 'Ver Detalles'}
                    </button>
                    {guitar.showSpecs && (
                      <div className="guitar-specs">
                        <h4>Especificaciones:</h4>
                        <ul>
                          <li><strong>Micrófonos:</strong> {guitar.specs.microfonos}</li>
                          <li><strong>Madera del Mástil:</strong> {guitar.specs.mastrill}</li>
                          <li><strong>Madera del Cuerpo:</strong> {guitar.specs.cuerpo}</li>
                          <li><strong>Puente:</strong> {guitar.specs.puente}</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
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
            <p>Contacto: +593 987 269 974</p>
          </div>
          <div className="copyright">
            <p>© <span id="current-year-footer"></span> Crimson Tone. Derechos Reservados.</p>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Guitarras;