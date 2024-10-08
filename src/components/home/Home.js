import React from 'react';
import './Home.css';
import Fade from 'react-reveal/Fade';
import { Bounce } from 'react-reveal';
import { Link } from 'react-scroll';
import CodeIcon from '@material-ui/icons/Code';
import Navbar from '../navbar/Navbar';
import github from '../../images/social/github.png';

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home">
        <div className={`greetings' hide' : ''}`}>
          <Fade bottom distance="40px">
            <h1 className="greeting-text">
              Hi, I'm <span className="name">Naol Legesse</span>.{' '}
              <span className="wave-emoji" role="img" aria-label="waving hand">
                👋
              </span>
            </h1>
            <h1 className="greeting-text">
              <p>
                I build scalable backend systems.
              </p>
            </h1>
            <Bounce cascade>
              <div className="links">
                <a
                  href="https://github.com/naolleg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} alt="Github Logo" width="50px" />
                </a>
              </div>
            </Bounce>
            <div className="scroll-down">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-63}
                duration={500}
              >
                <CodeIcon
                  fontSize="large"
                  style={{ pointerEvents: 'fill', cursor: 'pointer' }}
                />
              </Link>
            </div>
          </Fade>
        </div>
        <Navbar />
      </div>
    </div>
  );
};

export default Home;