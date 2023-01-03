import { a, useSpring, useTrail } from '@react-spring/web';
import { Close, Menu } from '@styled-icons/ionicons-outline';
import type React from 'react';
import { useState } from 'react';

const data = ['Main', 'About', 'Projects', 'Skills', 'Contact'];

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
        <h2 className="mobile-menu-h2">Menu</h2>
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
    </a.div>
  );
};

export default HamburgerMenu;
