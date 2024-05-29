import React from 'react';
import Header from './Componentes/header';
import Projects from './Componentes/proyectos';
import Footer from './Componentes/Footer';
import './App.css';
import './index.css';

import { FaReact, FaPython, FaHtml5 } from 'react-icons/fa';
import { SiJavascript, SiVite, SiPostgresql } from 'react-icons/si';

import Image1 from './assets/foto1.jpg';
import Image from './assets/foto.jpg';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="about" className="section-with-image">
          <div className="text">
            <h2>Sobre mí</h2>
            <h2>Isabella Maria Miralles Penagos</h2>
            <p>
              Soy una estudiante apacionada por el mundo de la programacion y la creacion de nuevos proyectos e ideas que se pueden desarrollar por medio de código.
              Me encuentro en un punto de desarrollo donde empiezo a conocer y aprender sobre las distintas ramas que tiene la programación, conociendo nuevos alcances,
              nuevas metas, teniendo nuevas visiones, encontrando lo que mas me gusta y me llama la atencion de este mundo. 
              Actualmente empece con el desarrollo web y ha sido lo que más me ha gustado y lo que más quería aprender, aprendí paso a paso como realizar tanto un backend,
              como un frontend, conectar una base de datos, utilizar Docker, conectar todo lo mencionado anteriormente en un mismo proyecto y hacer que funcione de forma adecuada.
              Sigo en el camino de seguir aprendiendo para poder desarrollar proyectos con visiones ambiciosas para que ayuden a más personas y poder demostrarme a mi misma de lo que
              soy capaz de lograr.
              Con el tiempo el objetivo es poder tener una empresa en la cual se desarrollarán proyectos en un ambiente lleno de personas con iniciativa, con metas y objetivos
              de mejora constante, fomentando la comunicación y el trabajo en grupo. De igual forma poder apoyar a las jovenes que como yo aman el mundo de la programación y por diversas
              razones las hacen creer que no tienen las capacidades o que no pueden, ya que en mi opinion todos somos capaces de aprender y lograr todo lo que nos propongamos. 
            </p>
          </div>
          <div className="image">
            <img src={Image1} alt="Sobre mí" />
          </div>
        </section>
        <section id="education" className="section-with-image reverse">
          <div className="text">
            <h2>Educacion</h2>
            <p>
              Universidad: Inscrita en la Universidad del Valle de Guatemala en la carrera de Ingeniería en ciencias de la computación y tecnologías de la información, cursando tercer año
              Diversificado: 2020-2021 Centro Escolar Campoalegre (Bachiller en ciencias y letras)
              Secundaria: 2017-2019 Centro Escolar Campoalegre
              Primaria: 2011-2016 Centro Escolar Campoalegre
            </p>
          </div>
          <div className="image">
            <img src={Image} alt="Educación" />
          </div>
        </section>
        <section id="projects">
          <h2>Proyectos</h2>
          <Projects />
        </section>
        <section id="knowledge">
          <h2>Conocimientos</h2>
          <div className="knowledge-icons">
            <div className="icon-container">
              <FaReact size={50} />
              <p>React</p>
            </div>
            <div className="icon-container">
              <SiVite size={50} />
              <p>Vite</p>
            </div>
            <div className="icon-container">
              <SiJavascript size={50} />
              <p>JavaScript</p>
            </div>
            <div className="icon-container">
              <FaPython size={50} />
              <p>Python</p>
            </div>
            <div className="icon-container">
              <FaHtml5 size={50} />
              <p>HTML5</p>
            </div>
            <div className="icon-container">
              <SiPostgresql size={50} />
              <p>PostgreSQL</p>
            </div>
          </div>
        </section>
        <section id="contact">
          <h2>Contacto</h2>
          <p>e-mail: isa.ma.mirallespenagos@gmail.com</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
