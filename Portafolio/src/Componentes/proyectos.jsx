import React from 'react';
import './proyectos.css';
import CalculadoraImage from '../assets/calculadora.jpg';
import DiseñoImage from '../assets/diseño.jpg';
import BackImage from '../assets/back.jpg';
import NavImage from '../assets/navigation.jpg';
import CarImage from '../assets/carros.jpg';
import ChatImage from '../assets/chat.jpg';

const projects = [
  {
    title: 'Calculadora',
    description: 'Calculadora funcional utilizando vite+react',
    image: CalculadoraImage,
    link: 'https://github.com/Isabella-22293/lab8-web.git'
  },
  {
    title: 'Backend',
    description: 'Backend de un blog de cocina',
    image: BackImage,
    link: 'https://github.com/Isabella-22293/Lab6-web.git'
  },
  {
    title: 'Diseño',
    description: 'Diseño del frontend para un blog de cocina',
    image: DiseñoImage,
    link: 'https://github.com/Isabella-22293/Lab7-web.git'
  },
  {
    title: 'Navigation',
    description: 'Laboratorio en el cual se practico la navegacion utilizando kotlin',
    image: NavImage,
    link: 'https://github.com/Isabella-22293/android-compose-uvg.git'
  },
  {
    title: 'Taller',
    description: 'Interfaz para un taller utilizando python',
    image: CarImage,
    link: 'https://github.com/Isabella-22293/Proyecto-base1.git'
  },
  {
    title: 'Chat',
    description: 'Se realizo un chat utilizando JavaScript',
    image: ChatImage,
    link: 'https://github.com/Isabella-22293/Lab5-web.git'
  },
];

const Projects = () => {
  return (
    <div className="projects-list">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.image} alt={project.title} className="project-image" />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">Ver proyecto</a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
