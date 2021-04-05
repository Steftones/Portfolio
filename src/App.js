import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import GlitchyTitle from './components/GlitchyTitle'
import Projects from './components/Projects'
import TechSkills from './components/TechSkills'

const homepageSkills = [
  ['javascript-plain', 'JavaScript'],
  ['react-original', 'React'],
  ['nodejs-plain', 'Node.js'],
  ['python-plain', 'Python'],
  ['express-original', 'Express'],
  ['mongodb-plain', 'MongoDB'],
  ['css3-plain', 'CSS'],
  ['sass-original', 'SASS'],
  ['git-plain','Git'],
  ['ruby-plain', 'Ruby'],
  ['flask-original', 'Flask'], 
  ['sqlalchemy-plain', 'Sqlalchemy'],
  ['postgresql-plain', 'Postgresql'],
  ['mocha-plain', 'Mocha'],
  ['npm-original-wordmark', 'NPM'],
  ['bootstrap-plain', 'Bootstrap'],
  ['webpack-plain','Webpack'],
  ['heroku-plain', 'Heroku'],
  ['supercollider', 'Supercollider'],
  ['unity', 'Unity']
]

const App = () => {

  const navbar = (
  <Navbar className="navbarStyle" collapseOnSelect expand="lg" variant="dark" fixed="top">
    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="m-auto">
        <Nav.Link href="#about">about.</Nav.Link>
        <Nav.Link href="#projects">projects.</Nav.Link>
        <Nav.Link href="#inProgress">in progress.</Nav.Link>
        <Nav.Link href="#experienceSection">experience.</Nav.Link>
        <Nav.Link href="#contact">contact.</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )

  const hero = <>
  <section className="hero is-fullheight Parallax is-black">
  <div className="hero-body">
    <div className="container has-text-centered heroContainer">
      <GlitchyTitle/>
    </div>
  </div>
  </section>
  </>

  const about = <>
  <section className="section is-medium">
    <div className="columns sectionMargin">
      <div className="column aboutColumn">
        <h1 className="title sectionTitle">
          about.
        </h1>
        <h2 className="subtitle">
          web developer | London
        </h2>
        <p>
          I'm a recent graduate Software Engineer with experience in full-stack technologies and web development. As a creative individual, I became interested in coding as a new way to explore my interests by building digital instruments, games, and other tools. My drive to learn is what pushes me forward, and my eye for good design inspires me to refine and polish. I continue to learn about full-stack development and am always challenging myself by making new projects. I'm keen to build upon my interests, experiences and knowledge in a professional environment, working diligently as part of a collaborative team.
        </p>
      </div>
      <div className="column">
        <h2 className="subtitle">
          Technical skills
        </h2>
        <div>
          <ul>
            <TechSkills skills={homepageSkills}/>
          </ul>
        </div>
      </div>
    </div>
  </section>
  </>

  const projects = <>
  <a className="hiddenAnchors" name="projects"></a>
  <section className="section is-medium blackSection">
    <div className="columns sectionMargin">
      <div className="column">
        <h1 className="title sectionTitle whiteText">
          projects.
        </h1>
      </div>
    </div>
    <div className="columns sectionMargin">
      <Projects/>
    </div> 
  </section>
  </>

  const inProgress = <>
  <a className="hiddenAnchors" name="inProgress"></a>

  <section className="section is-medium">
    <div className="columns sectionMargin">
      <div className="column">
        <h1 className="title sectionTitle">
          in progress.
        </h1>
        <div className="column experience">

          <div className="interestContainer">
            <div className="interests interests1">
              Learning Supercollider, a programming language for real-time audio synthesis. I am making virtual instruments to control with external hardware.
            </div>
            <div className="interests interests2">
              Making a music app in JavaScript with Tone JS. The app will create live music based on API data.
            </div>
            <div className="interests interests3">
              Making a 3D platform game using C# and the Unity Gaming Engine.
            </div>
          </div>
          
          <div className="interestContainer">
            <div className="interests interests4">
              Planning new cycle tours. Next on my list will be Land's End to John o' Groats.
            </div>
            <div className="interests interests5">
              <h3>Currently learning</h3>
                <ul className="circleList">
                  <li>CS50's Introduction to Computer Science - Online course, Harvard University</li>
                  <li>Python</li>
                  <li>Django</li>
                  <li>Testing frameworks</li>
                </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
  </>

  const experienceData = [
    {
      name: 'General Assembly',
      role: 'Software Engineering Student',
      date: 'Dec 2020 – Mar 2021',
      content: [
        'An immersive programming course. Various technologies were introduced by instructors, with a mix of traditional classes, collaborative group projects and workshops. The course was solidified with four major projects, daily and weekend homework assignments.',
        'Technologies covered included: JavaScript, React, Node.js, Git, Express, MongoDB, Python, Flask, PostgreSQL and CSS/Sass'
      ]
    },
    {
      name: 'Copywriter',
      role: 'Freelance',
      date: 'Nov 2016 – Jan 2021',
      content: [
        'Wrote online articles, blog posts and print advertisements.',
        'Applied expertise in search engine optimisation (SEO) and link-building to increase traffic and conversion rates.',
        'Self-managed and organised time to evaluate client needs, carry out research and meet deadlines.',
        'Self-sourced clients and worked for various agencies, namely Traffic Terminal (Ukraine), Big Star Copywriting (UK) and Palladous Marketing (UK).'
      ]
    },
    {
      name: 'Bournemouth University',
      role: 'Reserach Assistant',
      date: 'Jul 2017 – Oct 2017',
      content: [
        'Carried out research for publication in the International Journal of Primatology.',
        'Used R to carry out statistical analysis, scrape scientific data and create figures for research publications. I used ArcGIS in tandem with R to create scientific data.',
        'Coordinated meetings and collaborated with research scientists to edit grant applications, share findings and discuss strategy.'
      ]
    }
  ]

  const experience = <>
  <a className="hiddenAnchors" name="experienceSection"></a>
  <section className="section is-medium blackSection">
    <div className="columns sectionMargin">
      <div className="column">
        <h1 className="title sectionTitle whiteText">
          experience.
        </h1>
        <div className="columns whiteText">
          {experienceData.map((data, index) => <div className="column experience" key={index}>
              <h2>{data.name}</h2>
              <h4>{data.role}</h4>
              <i>{data.date}</i>
              <ul className="experienceContent circleList">
                {data.content.map((element, index) => <li key={index}>{element}</li>)}
              </ul>
          </div>)}
        </div>
        <button className="button is-primary is-inverted is-outlined is-rounded linkedInButton"
        onClick={() => window.open('https://www.linkedin.com/in/stefansokolowski/', '_blank')}>visit LinkedIn for a full summary.</button>
      </div>
    </div>
    
  </section>
  </>

  const contact = <>
  <section className="section is-small">
    <div className="columns sectionMargin">
      <div className="column">
        <h1 className="title sectionTitle">
          contact.
        </h1>
        <div className="contacts-container">
          <p className="contact-p">
            <i className="fa fa-envelope fa-lg"/>
            <a
            className="contactLink"
            href="mailto:stefansokolowski16@gmail.com"
            alt="Stefan Sokolowski email"
            target="_blank"
            rel="noreferrer">stefansokolowski16@gmail.com</a>
          </p>
          <p className="contact-p">
            <i className="fa fa-mobile fa-lg"/>
            <a
            className="contactLink"
            href="tel:+4407872351200"
            alt="Stefan Sokolowski phone"
            target="_blank"
            rel="noreferrer">+44 7872351200</a>
          </p>
          <p className="contact-p">
            <i className="fa fa-github fa-lg"/>
            <a
            className="contactLink"
            href="https://github.com/Steftones"
            alt="Stefan Sokolowski Github"
            target="_blank"
            rel="noreferrer">github.com/steftones</a>
          </p>
          <p className="contact-p">
            <i className="fa fa-linkedin fa-lg"/>
            <a
            className="contactLink"
            href="https://www.linkedin.com/in/stefansokolowski/"
            alt="Stefan Sokolowski Linkedin"
            target="_blank"
            rel="noreferrer">www.linkedin.com/in/stefansokolowski</a>
          </p>
        </div>
        <a className="hiddenAnchors" name="contact"></a>
        <div className="copyright">
          &copy;2021 Stefan Sokolowski
        </div>
        </div>
      </div>
    </section>
  </>

  return <>
    {navbar}
    {hero}

    <div className="Diagonal down-white"><a className="hiddenAnchors" name="about"></a></div>

    {about}

    <div className="Diagonal down-white"/>
    <div className="parallax-background par-1"/>
    <div className="Diagonal up-black"/>

    {projects}
    
    <div className="Diagonal down-black"/>
    <div className="parallax-background par-2"/>
    <div className="Diagonal up-white"><a className="hiddenAnchors" name="experience"></a></div>

    {inProgress}

    <div className="Diagonal down-white"/>
    <div className="parallax-background par-1"/>
    <div className="Diagonal up-black"/>

    {experience}

    <div className="Diagonal down-black"></div>
    <div className="parallax-background par-2"/>
    <div className="Diagonal up-white"/>  

    {contact}
  </>
}

export default App;
