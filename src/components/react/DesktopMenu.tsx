import React from 'react';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';

const data = ['Main', 'Projects', 'Skills', 'About', 'Contact'];

const DesktopMenu = () => {
  return (
    <NavigationMenu.Root className="desktop-menu-bar" id="primary-navigation">
      <NavigationMenu.List className="desktop-menu-list">
        {data.map((item, i) => (
          <NavigationMenu.Item className="desktop-menu-item" tabIndex={i}>
            <NavigationMenu.Link className="desktop-menu-link">
              {item}
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default DesktopMenu;
