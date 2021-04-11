import React, { useState } from 'react'
import { Carousel, Modal } from 'react-bootstrap'
import TechSkills from './TechSkills'
import 'bootstrap/dist/css/bootstrap.min.css'

import cabbage1 from '../assets/cabbage/cabbage1.png'
import cabbage2 from '../assets/cabbage/cabbage2.png'
import cabbage3 from '../assets/cabbage/cabbage3.png'
import cabbage4 from '../assets/cabbage/cabbage4.png'

import tetris1 from '../assets/tetris/tetris1.png'
import tetris2 from '../assets/tetris/tetris2.png'

import quizapp1 from '../assets/quizapp/quizapp1.png'
import quizapp2 from '../assets/quizapp/quizapp2.png'
import quizapp3 from '../assets/quizapp/quizapp3.png'

import derive1 from '../assets/derive/derive1.png'
import derive2 from '../assets/derive/derive2.png'
import derive3 from '../assets/derive/derive3.png'
import derive4 from '../assets/derive/derive4.png'
import derive5 from '../assets/derive/derive5.png'
import derive6 from '../assets/derive/derive6.png'
import derive7 from '../assets/derive/derive7.png'
import derive8 from '../assets/derive/derive8.png'

import synthKitchen1 from '../assets/synthkitchen/synthKitchen1.png'
import synthKitchen2 from '../assets/synthkitchen/synthKitchen2.png'
import synthKitchen3 from '../assets/synthkitchen/synthKitchen3.png'
import synthKitchen4 from '../assets/synthkitchen/synthKitchen4.png'
import synthKitchen5 from '../assets/synthkitchen/synthKitchen5.png'
import synthKitchen6 from '../assets/synthkitchen/synthKitchen6.png'

const Projects = () => {

  const [modalShow, setModalShow] = useState(false)
  const [modalProject, setModalProject] = useState(['noImage'])

  const PictureModal = (props) => {

    const extraPictures = modalProject.map((carousel, index) => 
      <Carousel.Item key={index} interval={120000} >
        <img className="carouselImage" src={carousel} alt={carousel.title}/>
      </Carousel.Item>
    )

    return <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
        </Modal.Header>

        <Modal.Body>
          <div className="modalContainer">
            <Carousel
            nextIcon={<div className="carouselButton">&nbsp;&nbsp;<i className="fa fa-chevron-right fa-3x" aria-hidden="true"/></div>}
            prevIcon={<div className="carouselButton"><i className="fa fa-chevron-left fa-3x" aria-hidden="true"/>&nbsp;&nbsp;</div>}
            className="carouselWhole" slide={false}>
              {extraPictures}
            </Carousel> 
          </div>
        </Modal.Body>

      </Modal>
    </>
  }

  const projectItems = [
    {
      image: [synthKitchen1, synthKitchen2, synthKitchen3, synthKitchen4, synthKitchen5, synthKitchen6],
      title: 'SynthKitchen',
      subtitle: 'A browser-based synthesizer and sequencer',
      description: 'General Assembly project 4 (solo, 7 days) - a full-stack app with React, Python and Flask. Features 6 synthesizers that create sound using JavaScript and the browser\'s AudioContext web API. Sounds can be sequenced, assigned logical conditions and manipulated in real-time by the user.',
      github: 'https://github.com/Steftones/SynthKitchen',
      live: 'https://synthkitchen.herokuapp.com/music',
      skills: [
        ['javascript-plain', 'JavaScript'], ['react-original', 'React'], ['python-plain', 'Python'], ['flask-original', 'Flask'], 
        ['sqlalchemy-plain', 'Sqlalchemy'], ['postgresql-plain', 'Postgresql'], ['bootstrap-plain', 'Bootstrap'], ['sass-original', 'SASS'], ['heroku-plain', 'Heroku'], ['git-plain','Git']
      ]
    },
    {
      image: [derive1, derive2, derive3, derive4, derive5, derive6, derive7, derive8],
      title: 'Derive',
      subtitle: 'A seq and ssdfsdfynth',
      description: 'General Assembly project 3 (group, 7 days) - a MERN stack application built in a group of three. Incorporated wireframing, prototyping and used a Kanban agile methodology. Several aspects were a group effort, but I was responsible for building "profile interaction" both on the front and back end.',
      github: 'https://github.com/Steftones/project-3',
      live: 'http://derivetravel.herokuapp.com/',
      skills: [
        ['javascript-plain', 'JavaScript'], ['react-original', 'React'], ['express-original', 'Express'], ['mongodb-plain', 'MongoDB'],
        ['mocha-plain', 'Mocha'], ['sass-original', 'SASS'], ['heroku-plain', 'Heroku'], ['git-plain','Git']
      ]
    },
    {
      image: [quizapp1, quizapp2, quizapp3],
      title: 'QuizApp',
      subtitle: 'A quiz',
      description: 'General Assembly project 2 (group, 2 days) - a paired "hackathon" project in React. The app is a trivia quiz that harnesses data fetched from an external API (opentdb.com).',
      github: 'https://github.com/Steftones/quiz',
      live: 'https://yusuf963.github.io/quiz/#/quiz/home',
      skills: [['javascript-plain','JavaScript'], ['react-original', 'React'], ['git-plain','Git']]
    },
    {
      image: [tetris1, tetris2],
      title: 'Tetris',
      subtitle: 'Popular arcade game Tetris',
      description: 'General Assembly project 1 (solo, 7 days) - building an arcade game over seven days with HTML, CSS and Vanilla JavaScript.',
      github: 'https://github.com/Steftones/Tetris',
      live: 'https://steftones.github.io/Tetris/',
      skills: [['javascript-plain','JavaScript'], ['html5-plain', 'HTML5'], ['css3-plain', 'CSS'], ['git-plain','Git']]
    },
    {
      image: [cabbage1, cabbage2, cabbage3, cabbage4],
      title: 'Cabbage.exe',
      subtitle: 'A text-based RPG',
      description: 'My first coding project, created prior to my formal training. A real time text-based rpg, based around the mundane nature of sauerkraut production. The player is immersed in the banal realities of waiting around in the kitchen.',
      github: 'https://github.com/Steftones/Cabbage',
      live: null,
      skills: [['ruby-plain', 'Ruby'], ['git-plain','Git']]
    },

  ]

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const carousels = projectItems.map((carousel, index) => 
    <Carousel.Item key={index} interval={120000} >
      <img className="carouselImage" src={carousel.image[0]} alt={carousel.title} onClick={() => {
        setModalProject(projectItems[index].image)
        setModalShow(true)
      }}/>
    </Carousel.Item>
  )

  return <>
    <PictureModal show={modalShow} onHide={() => setModalShow(false)}/>

    <div className="column">
      <Carousel
      nextIcon={<div className="carouselButton">&nbsp;&nbsp;<i className="fa fa-chevron-right fa-3x" aria-hidden="true"/></div>}
      prevIcon={<div className="carouselButton"><i className="fa fa-chevron-left fa-3x" aria-hidden="true"/>&nbsp;&nbsp;</div>}
      className="carouselWhole" slide={false} onSelect={handleSelect}>
        {carousels}
      </Carousel> 
    </div>
    <div className="column whiteText">
      <h3>{projectItems[index].title}</h3>

      <div className="projectButtons">
        <button
          className="button is-primary is-inverted is-outlined is-rounded"
          onClick={() => window.open(projectItems[index].github, '_blank')}>view on github.</button>
        {projectItems[index].live && <>
        <button
        className="button is-primary is-inverted is-outlined is-rounded"
        onClick={() => window.open(projectItems[index].live, '_blank')}>open project.</button>
        </>}
        <button className="button is-primary is-inverted is-outlined is-rounded" onClick={() => {
          setModalProject(projectItems[index].image)
          setModalShow(true)
        }} alt="Live project demo" target="_blank" rel="noreferrer">view pictures.</button>
      </div>

      <p className="projectDescription">{projectItems[index].description}</p>
      
      <h4>Main tech</h4>
      <div>
        <ul>
          <TechSkills skills={projectItems[index].skills} classes="smallSkillIcons"/>
        </ul>
      </div>
    </div>
  </>
}
 
export default Projects;