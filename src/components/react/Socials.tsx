import type React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';

import { Linkedin, Github } from '@styled-icons/boxicons-logos';
import { Mail } from '@styled-icons/ionicons-outline';
import { FilePaper2 } from '@styled-icons/remix-line';
import resume from '../../assets/documents/KevinToResume3.pdf';

const data = [
  {
    name: 'Github',
    icon: <Github className="socials-icon" />,
    link: 'https://www.github.com/kevinqtogitty'
  },
  {
    name: 'Linkedin',
    icon: <Linkedin className="socials-icon" />,
    link: 'https://www.linkedin.com/in/kevinqto/'
  },
  {
    name: 'Email',
    icon: <Mail className="socials-icon" />,
    link: 'mailto:kevinq.to@gmail.com'
  },
  {
    name: 'Resume',
    icon: <FilePaper2 className="socials-icon" />,
    link: resume
  }
];

const Socials = () => {
  return (
    <>
      <ul className="socials-list">
        <Tooltip.Provider>
          {data.map((item, i) => (
            <Tooltip.Root key={i}>
              <Tooltip.Trigger className="socials-trigger">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.icon}
                </a>
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
