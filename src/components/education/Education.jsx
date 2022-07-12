import React from 'react'
import './education.css'
import {FaUniversity} from 'react-icons/fa'
import {MdSubject} from 'react-icons/md'
import {AiOutlineCalendar} from 'react-icons/ai'
import {BsAward} from 'react-icons/bs'

function Education() {
  return (
    <section id="education">
      <h5>Where I Studied</h5>
      <h2>My Education</h2>

      <div className="container education__container">
        <article className="education">
          <div className="education__head">
            <h3>Graduation</h3>
          </div>
          <ul className='education__list'>
            <li className="institute">
              <FaUniversity className='education__list-icon'/>
              <p>University Institute of Technology, RGPV, Bhopal</p>
            </li>
            <li className="course">
              <MdSubject className='education__list-icon'/>
              <p>B.Tech in Computer Science and Engineering</p>
            </li>
            <li className="duration">
              <AiOutlineCalendar className='education__list-icon'/>
              <p>2018-2022</p>
            </li>
            <li className="result">
              <BsAward className='education__list-icon'/>
              <p>Pursuing</p>
            </li>
          </ul>
        </article>

        <article className="education">
          <div className="education__head">
            <h3>Senior Secondary Education</h3>
          </div>
          <ul className='education__list'>
            <li className="institute">
              <FaUniversity className='education__list-icon'/>
              <p>Jawahar Navodaya Vidyalaya Ratibad, Bhopal</p>
            </li>
            <li className="course">
              <MdSubject className='education__list-icon'/>
              <p>Mathematics and Computer Science</p>
            </li>
            <li className="duration">
              <AiOutlineCalendar className='education__list-icon'/>
              <p>2015-2017</p>
            </li>
            <li className="result">
              <BsAward className='education__list-icon'/>
              <p>Passed with 90%</p>
            </li>
          </ul>
        </article>

        <article className="education">
          <div className="education__head">
            <h3>Secondary Education</h3>
          </div>
          <ul className='education__list'>
            <li className="institute">
              <FaUniversity className='education__list-icon'/>
              <p>Jawahar Navodaya Vidyalaya Ratibad, Bhopal</p>
            </li>
            <li className="course">
              <MdSubject className='education__list-icon'/>
              <p>General Science</p>
            </li>
            <li className="duration">
              <AiOutlineCalendar className='education__list-icon'/>
              <p>2010-2015</p>
            </li>
            <li className="result">
              <BsAward className='education__list-icon'/>
              <p>Passed with 9.0 CGPA</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Education