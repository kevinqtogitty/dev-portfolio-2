import type React from 'react';
import { a, useSpring, useTrail } from '@react-spring/web';
import { Github, Linkedin } from '@styled-icons/boxicons-logos';
import { Close, Mail, Menu } from '@styled-icons/ionicons-outline';
import { useState } from 'react';
import resume from '../../assets/documents/KevinToResume3.pdf';

const data = ['Main', 'About', 'Projects', 'Skills', 'Contact'];
const socials = [
  {
    name: 'Github',
    icon: <Github className="socials-icon mobile" />,
    link: 'https://www.github.com/kevinqtogitty'
  },
  {
    name: 'Linkedin',
    icon: <Linkedin className="socials-icon mobile" />,
    link: 'https://www.linkedin.com/in/kevinqto/'
  },
  {
    name: 'Email',
    icon: <Mail className="socials-icon mobile" />,
    link: 'mailto:kevinq.to@gmail.com'
  }
];

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  const handleOpenMenu = () => {
    setOpen((state) => !state);
  };

  return (
    <nav className="mobile-menu">
      <button
        className="mobile-menu-toggle"
        onClick={() => handleOpenMenu()}
        aria-controls="hamburger-primary-navigation"
        aria-label="Open hamburger menu"
      >
        <Menu className="mobile-menu-open" />
      </button>
      <SlidingMenu handleOpenMenu={handleOpenMenu} open={open} />
    </nav>
  );
};

interface Props {
  handleOpenMenu: () => void;
  open: boolean;
}

const SlidingMenu: React.FC<Props> = ({ handleOpenMenu, open }) => {
  const props = useSpring({
    opacity: open ? 1 : 0,
    transform: open ? 'translateX(0%)' : 'translateX(100%)'
  });

  const trail = useTrail(data.length, {
    transform: open ? 'translateX(0%)' : 'translateX(100%)'
  });

  return (
    <a.div
      style={{ ...props }}
      className="mobile-sliding-menu"
      id="hamburger-primary-navigation"
    >
      <div className="mobile-h2-close-container">
        <button
          className="mobile-menu-toggle"
          onClick={() => handleOpenMenu()}
          aria-controls="hamburger-primary-navigation"
          aria-label="Close hamburger menu"
          aria-expanded={open ? 'true' : 'false'}
        >
          <Close className="mobile-menu-close" />
        </button>
      </div>
      <ul className="mobile-menu-ul">
        {trail.map((spring, i) => (
          <a.li
            style={{ ...spring }}
            key={i}
            tabIndex={i}
            className="mobile-menu-li"
            onClick={() => handleOpenMenu()}
          >
            <a href={`#page-${i}`}>{data[i]}</a>
          </a.li>
        ))}
      </ul>
      <ul className="mobile-menu-socials-ul">
        {socials.map((item, i) => (
          <li className="mobile-menu-socials-li" key={i}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </a>
          </li>
        ))}
        <div className="hero-button-container resume">
          <a href={resume} target="_blank" rel="noopener noreferrer">
            <button className="hero-button resume mobile">Resume</button>
          </a>
        </div>
      </ul>
    </a.div>
  );
};

export default HamburgerMenu;
