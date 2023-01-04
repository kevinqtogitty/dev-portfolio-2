import type React from 'react';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import resume from '../../assets/documents/KevinToResume.pdf';

const data = ['Main', 'About', 'Projects', 'Skills', 'Contact'];

const DesktopMenu = () => {
  return (
    <NavigationMenu.Root className="desktop-menu-bar" id="primary-navigation">
      <NavigationMenu.List className="desktop-menu-list">
        {data.map((item, i) => (
          <NavigationMenu.Item className="desktop-menu-item" tabIndex={i}>
            <NavigationMenu.Link
              className="desktop-menu-link"
              href={`#page-${i}`}
            >
              <span className="menu-item-number">0{i + 1}.</span> {`${item}`}
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        ))}
        <div className="hero-button-container resume">
          <a href={resume} target="_blank" rel="noopener noreferrer">
            <button className="hero-button resume">Resume</button>
          </a>
        </div>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default DesktopMenu;
