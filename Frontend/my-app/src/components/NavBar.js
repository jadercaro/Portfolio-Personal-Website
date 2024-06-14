import { useState, useEffect } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import logo from '../assets/img/alpha-j-svgrepo-com.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';


export const NavBar = () => { // This is a functional component
    const [activeLink, setActiveLink] = useState('home');               // Sirve para crear un estado que se utiliza para almacenar el enlace activo
    const [scolled, setScrolled] = useState(false);                     // sirve para crear un estado que se utiliza para almacenar si el usuario se ha desplazado

    useEffect(() => {                                                    // esto es un efecto que se ejecuta cuando el componente se monta
        const onScroll = () => {                                        // sirve para crear una función que se llama cuando el usuario se desplaza
            if (window.scrollY > 50) {                                   // Esta función se llama cuando el usuario se desplaza más de 50 píxeles
                setScrolled(true);                                      // Esta función se llama cuando el usuario se desplaza más de 50 píxeles
            } else {
                setScrolled(false);                                     // Esta función se llama cuando el usuario se desplaza menos de 50 píxeles
            }
        }
        window.addEventListener('scroll', onScroll);                    // Esto es un evento que se dispara cuando el usuario se desplaza

        return () => window.removeEventListener('scroll', onScroll); // Esto es una función que se llama cuando el componente se desmonta
    }, []);                                                         // Esto es un arreglo de dependencias que se pasa como segundo argumento a useEffect

    const onUpdateActiveLink = (value) => {                         // Sirve para crear una función que se llama cuando se actualiza el enlace activo
        setActiveLink(value);}


        return (
            <Navbar expand="lg" className={scrolled ? "scrolled" : ""}> // Esto es un componente de Navbar de Bootstrap sirve para crear una barra de navegación
                <Container>                                       // Esto es un componente de Container de Bootstrap sirve para crear un contenedor
                    <Navbar.Brand href="#home">                     // Sirve para crear un enlace en la barra de navegación
                        <img src={logo} alt="logo" />                   // Sirve para crear una imagen en la barra de navegación
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">// Sirve para crear un botón de toogle en la barra de navegación
                        <span className="navbar-toggler-icon"></span> // Sirve para crear un icono de toogle en la barra de navegación
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">         // Sirve para crear un colapso en la barra de navegación
                        <Nav className="me-auto">                     // sirve para crear una lista de navegación en la barra de navegación
                            <Nav.Link href="#home" className={activeLink == 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>      // Sirve para crear un enlace en la lista de navegación
                            <Nav.Link href="#skills" className={activeLink == 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>  // Sirve para crear un enlace en la lista de navegación, activeLink es un estado que se utiliza para almacenar el enlace activo y onUpdateActiveLink es una función que se llama cuando se actualiza el enlace activo
                            <Nav.Link href="#projects" className={activeLink == 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        </Nav>
                        <span className="navbar-text">                  // un span elemento se utiliza para agrupar elementos en línea en un documento
                            <div className="social-icon">               // Un div sirve para agrupar elementos en un documento
                                <a href="#"><img src={navIcon1} alt="" /></a> // un a elemento se utiliza para crear un enlace en un documento
                                <a href="#"><img src={navIcon2} alt="" /></a>
                                <a href="#"><img src={navIcon3} alt="" /></a>
                            </div>
                            <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button> // Sirve para crear un botón en la barra de navegación
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }

