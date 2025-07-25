import React, { useState, useEffect, useCallback } from 'react';
import { Navbar, Nav, Button, Container, Form, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import crimsonToneLogo from '../assets/CrimsonTone.jpg';
import prsBackground from '../assets/PRS.webp';
import './Pago.css';

function Pago() {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const [totalFinal, setTotalFinal] = useState(0);
    const [cartItemCount, setCartItemCount] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState('tarjeta');

    const updateCartAndTotals = useCallback(() => {
        const storedCart = JSON.parse(localStorage.getItem('carrito')) || [];
        setCartItems(storedCart);

        let calculatedSubtotal = 0;
        let totalItems = 0;
        storedCart.forEach(item => {
            calculatedSubtotal += (item.precio || 0) * (item.cantidad || 0);
            totalItems += (item.cantidad || 0);
        });
        setSubtotal(calculatedSubtotal);
        setTotalFinal(calculatedSubtotal);
        setCartItemCount(totalItems);

        const resumenCarritoSection = document.querySelector('.resumen-carrito');
        const finalizarCompraAcciones = document.querySelector('.finalizar-compra-acciones');
        if (storedCart.length === 0) {
            if (finalizarCompraAcciones) finalizarCompraAcciones.style.display = 'none';
            if (resumenCarritoSection) {
                const totalResumen = resumenCarritoSection.querySelector('.total-resumen');
                if (totalResumen) totalResumen.style.display = 'none';
            }
        } else {
            if (finalizarCompraAcciones) finalizarCompraAcciones.style.display = 'block';
            if (resumenCarritoSection) {
                const totalResumen = resumenCarritoSection.querySelector('.total-resumen');
                if (totalResumen) totalResumen.style.display = 'block';
            }
        }
    }, []);

    useEffect(() => {
        document.getElementById('current-year-footer').textContent = new Date().getFullYear();
        updateCartAndTotals();
    }, [updateCartAndTotals]);

    const handleQuantityChange = (e, id) => {
        let newQuantity = parseInt(e.target.value);
        if (isNaN(newQuantity) || newQuantity < 1) {
            newQuantity = 1;
        }

        const updatedCart = cartItems.map(item =>
            item.id === id ? { ...item, cantidad: newQuantity } : item
        );
        localStorage.setItem('carrito', JSON.stringify(updatedCart));
        updateCartAndTotals();
    };

    const handleRemoveItem = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        localStorage.setItem('carrito', JSON.stringify(updatedCart));
        updateCartAndTotals();
    };

    const handleFinalizePurchase = (event) => {
        event.preventDefault();

        if (cartItems.length === 0) {
            alert('Tu carrito está vacío. Por favor, añade productos antes de proceder al pago.');
            return;
        }

        const formEnvio = document.getElementById('form-envio');
        if (!formEnvio.checkValidity()) {
            alert('Por favor, complete todos los campos obligatorios de envío.');
            formEnvio.reportValidity();
            return;
        }

        if (paymentMethod === 'tarjeta') {
            const numeroTarjeta = document.getElementById('numero-tarjeta');
            const fechaExpiracion = document.getElementById('fecha-expiracion');
            const cvv = document.getElementById('cvv');
            const nombreTarjeta = document.getElementById('nombre-tarjeta');

            if (!numeroTarjeta.checkValidity() || !fechaExpiracion.checkValidity() ||
                !cvv.checkValidity() || !nombreTarjeta.checkValidity()) {
                alert('Por favor, complete correctamente todos los campos de la tarjeta de crédito.');
                if (!numeroTarjeta.checkValidity()) numeroTarjeta.reportValidity();
                else if (!fechaExpiracion.checkValidity()) fechaExpiracion.reportValidity();
                else if (!cvv.checkValidity()) cvv.reportValidity();
                else if (!nombreTarjeta.checkValidity()) nombreTarjeta.reportValidity();
                return;
            }
        }

        alert('¡Muchas gracias por preferirnos! Su compra ha sido un éxito. ¡Vuelva pronto!');

        localStorage.removeItem('carrito');
        setCartItems([]);
        updateCartAndTotals();

        setTimeout(() => {
            navigate('/');
        }, 1500);
    };

    const headerStyle = {
        backgroundImage: `url(${prsBackground})`,
    };

    return (
        <>
            <Navbar expand="lg" className="navbar">
                <Container fluid>
                    <Navbar.Brand as={Link} to="/">
                        <img src={crimsonToneLogo} alt="Crimson Tone Logo" className="logo-img" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="main-nav-collapse" />
                    <Navbar.Collapse id="main-nav-collapse">
                        <Nav className="ms-auto main-nav-list">
                            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                            <Nav.Link as={Link} to="/#quienes-somos">¿Quiénes Somos?</Nav.Link>
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

            <header className="hero-section" id="checkout-home" style={headerStyle}>
                <div className="hero-content">
                    <h1>TU <span className="highlight-tone">CARRITO</span></h1>
                    <p>Revisa y finaliza tu compra</p>
                </div>
            </header>

            <main className="container pago-container">
                <h1>Confirmar Compra</h1>

                <Row className="pago-grid">
                    <Col md={6} lg={4} className="resumen-carrito">
                        <h2>1. Resumen del Carrito</h2>
                        <ul className="lista-productos-carrito">
                            {cartItems.length === 0 ? (
                                <p id="empty-cart-message" className="carrito-vacio-mensaje">
                                    Tu carrito está vacío. ¡Explora nuestras guitarras y añade tus favoritas!
                                </p>
                            ) : (
                                cartItems.map(item => (
                                    <li key={item.id} className="producto-carrito">
                                        <div className="imagen-producto">
                                            <img src={item.imagen} alt={item.nombre} />
                                        </div>
                                        <div className="detalles-producto">
                                            <h3>{item.nombre}</h3>
                                            <p className="precio">${(item.precio || 0).toFixed(2)}</p>
                                            <div className="cantidad">
                                                <label htmlFor={`cantidad-${item.id}`}>Cantidad:</label>
                                                <input
                                                    type="number"
                                                    id={`cantidad-${item.id}`}
                                                    value={item.cantidad}
                                                    min="1"
                                                    onChange={(e) => handleQuantityChange(e, item.id)}
                                                />
                                            </div>
                                        </div>
                                        <Button
                                            className="btn btn-eliminar"
                                            onClick={() => handleRemoveItem(item.id)}
                                        >
                                            <i className="fas fa-trash"></i>
                                        </Button>
                                    </li>
                                ))
                            )}
                        </ul>

                        <div className="total-resumen">
                            <p>Subtotal: <span id="subtotal">${subtotal.toFixed(2)}</span></p>
                            <p>Costo de Envío: <span id="costo-envio">Gratis</span></p>
                            <p className="total-final">Total: <span id="total-final">${totalFinal.toFixed(2)}</span></p>
                        </div>
                    </Col>

                    <Col md={6} lg={4} className="informacion-envio">
                        <h2>2. Información de Envío</h2>
                        <Form id="form-envio">
                            <Form.Group className="form-group">
                                <Form.Label htmlFor="nombre">Nombre Completo:</Form.Label>
                                <Form.Control type="text" id="nombre" name="nombre" required />
                            </Form.Group>
                            <Form.Group className="form-group">
                                <Form.Label htmlFor="email">Correo Electrónico:</Form.Label>
                                <Form.Control type="email" id="email" name="email" required />
                            </Form.Group>
                            <Form.Group className="form-group">
                                <Form.Label htmlFor="telefono">Teléfono:</Form.Label>
                                <Form.Control type="tel" id="telefono" name="telefono" required />
                            </Form.Group>
                            <Form.Group className="form-group">
                                <Form.Label htmlFor="direccion">Dirección de Envío:</Form.Label>
                                <Form.Control type="text" id="direccion" name="direccion" required />
                            </Form.Group>
                            <Form.Group className="form-group">
                                <Form.Label htmlFor="ciudad">Ciudad:</Form.Label>
                                <Form.Control type="text" id="ciudad" name="ciudad" required />
                            </Form.Group>
                            <Form.Group className="form-group">
                                <Form.Label htmlFor="provincia">Provincia/Estado:</Form.Label>
                                <Form.Control type="text" id="provincia" name="provincia" required />
                            </Form.Group>
                            <Form.Group className="form-group">
                                <Form.Label htmlFor="codigo-postal">Código Postal:</Form.Label>
                                <Form.Control type="text" id="codigo-postal" name="codigo-postal" required />
                            </Form.Group>
                            <Form.Group className="form-group">
                                <Form.Label htmlFor="notas">Notas (opcional):</Form.Label>
                                <Form.Control as="textarea" id="notas" name="notas" rows="3" />
                            </Form.Group>
                        </Form>
                    </Col>

                    <Col md={12} lg={4} className="informacion-pago">
                        <h2>3. Información de Pago</h2>
                        <div className="metodos-pago">
                            <div className="metodo">
                                <Form.Check
                                    type="radio"
                                    id="tarjeta-credito"
                                    name="metodo-pago"
                                    value="tarjeta"
                                    label={<><i className="far fa-credit-card"></i> Tarjeta de Crédito/Débito</>}
                                    checked={paymentMethod === 'tarjeta'}
                                    onChange={() => setPaymentMethod('tarjeta')}
                                />
                                {paymentMethod === 'tarjeta' && (
                                    <div className="detalles-tarjeta">
                                        <Form.Group className="form-group">
                                            <Form.Label htmlFor="numero-tarjeta">Número de Tarjeta:</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="numero-tarjeta"
                                                name="numero-tarjeta"
                                                placeholder="**** **** **** ****"
                                                required
                                                pattern="\d{16}"
                                                title="Ingrese un número de tarjeta válido de 16 dígitos"
                                            />
                                        </Form.Group>
                                        <div className="form-group inline-inputs">
                                            <div>
                                                <Form.Label htmlFor="fecha-expiracion">Fecha de Expiración:</Form.Label>
                                                <Form.Control type="month" id="fecha-expiracion" name="fecha-expiracion" required />
                                            </div>
                                            <div>
                                                <Form.Label htmlFor="cvv">CVV:</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    id="cvv"
                                                    name="cvv"
                                                    placeholder="***"
                                                    required
                                                    pattern="\d{3,4}"
                                                    title="Ingrese el CVV de 3 o 4 dígitos"
                                                />
                                            </div>
                                        </div>
                                        <Form.Group className="form-group">
                                            <Form.Label htmlFor="nombre-tarjeta">Nombre en la Tarjeta:</Form.Label>
                                            <Form.Control type="text" id="nombre-tarjeta" name="nombre-tarjeta" required />
                                        </Form.Group>
                                    </div>
                                )}
                            </div>
                            <div className="metodo">
                                <Form.Check
                                    type="radio"
                                    id="paypal"
                                    name="metodo-pago"
                                    value="paypal"
                                    label={<><i className="fab fa-paypal"></i> PayPal</>}
                                    checked={paymentMethod === 'paypal'}
                                    onChange={() => setPaymentMethod('paypal')}
                                />
                                {paymentMethod === 'paypal' && (
                                    <div className="detalles-paypal">
                                        <p>Serás redirigido a PayPal para completar tu compra de forma segura.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Col>
                </Row>

                <div className="finalizar-compra-acciones">
                    <Button
                        type="submit"
                        className="btn btn-principal btn-lg"
                        id="btn-finalizar-compra"
                        onClick={handleFinalizePurchase}
                    >
                        Finalizar Compra
                    </Button>
                </div>
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
                        <p><i className="fas fa-envelope"></i> Correo electrónico: <a href="mailto:crimson@tone.com">crimson@tone.com</a></p>
                        <p><i className="fas fa-phone"></i> Contacto: + 593 987 269 974</p>
                    </div>
                    <div className="copyright">
                        <p>© <span id="current-year-footer"></span> Crimson Tone. Derechos Reservados.</p>
                    </div>
                </Container>
            </footer>
        </>
    );
}

export default Pago;