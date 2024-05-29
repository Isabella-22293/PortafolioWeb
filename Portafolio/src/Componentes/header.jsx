import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header>
      <h1>Mi Portafolio</h1>
      <nav>
        <a href="#about">Sobre mí</a>
        <a href="#education">Estudios</a>
        <a href="#projects">Proyectos</a>
        <a href="#knowledge">Conocimientos</a>
        <a href="#contact">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;

