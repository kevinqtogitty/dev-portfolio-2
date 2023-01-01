import type React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';

import { Linkedin, Github } from '@styled-icons/boxicons-logos';
import { Mail } from '@styled-icons/ionicons-outline';
import { FilePaper2 } from '@styled-icons/remix-line';
import type { ReactNode } from 'react';

const data = [
  { name: 'Github', icon: <Github className="socials-icon" /> },
  { name: 'Linkedin', icon: <Linkedin className="socials-icon" /> },
  { name: 'Email', icon: <Mail className="socials-icon" /> },
  { name: 'Resume', icon: <FilePaper2 className="socials-icon" /> }
];

const Socials = () => {
  return (
    <>
      <ul className="socials-list">
        <Tooltip.Provider>
          {data.map((item, i) => (
            <Tooltip.Root key={i}>
              <Tooltip.Trigger className="socials-trigger">
                {item.icon}
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className="socials-content"
                  sideOffset={5}
                  side="right"
                >
                  {item.name}
                  <Tooltip.Arrow className="socials-tooltip-arrow" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          ))}
          <span className="socials-line" />
        </Tooltip.Provider>
      </ul>
    </>
  );
};

export default Socials;
