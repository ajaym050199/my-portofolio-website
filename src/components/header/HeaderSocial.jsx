import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

function HeaderSocial() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/ajaymewada/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/ajaym050199" target="_blank"><BsGithub /></a>
        <a href="https://twitter.com/ajaym0501" target="_blank"><BsTwitter /></a>
    </div>
  )
}

export default HeaderSocial