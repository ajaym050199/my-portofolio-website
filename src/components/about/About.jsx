import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers}from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
      <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className= 'about__icon' />
              <h5>Experience</h5>
              <small> 2+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className= 'about__icon' />
              <h5>Subject Matter Expert</h5>
              <small>Helped 300+ Students</small>
            </article>

             <article className="about__card">
              <VscFolderLibrary className= 'about__icon' />
              <h5>Projects</h5>
              <small> 10+ Completed</small>
            </article>
          </div>

          <p>Solution-oriented and problem solver with 2 years of experience building and maintaining web
application and web application architecture. Highly skilled in communication, collaboration,
and solving technical problems.
          </p>
          
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About