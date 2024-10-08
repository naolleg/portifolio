import React from 'react'
import './Contact.css'
import Section from '../section/Section'
import { Bounce } from 'react-reveal'
import ContactForm from '../contactForm/ContactForm'
import linkedin from '../../images/social/linkedin.png'
import github from '../../images/social/github.png'

const Contact = () => {
  return (
    <Section title="Contact">
      <ContactForm />
      <Bounce cascade>
        <div className="links">
          <a
            href="https://www.github.com/naolleg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="Github Logo" width="40px" />
          </a>
          <a
            href="https://www.linkedin.com/in/naol-legesse-0b06092ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="Linkedin Logo" width="40px" />
          </a>

          
        </div>
      </Bounce>
    </Section>
  )
}

export default Contact
