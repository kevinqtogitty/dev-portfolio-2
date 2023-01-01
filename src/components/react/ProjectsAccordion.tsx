import * as Accordion from '@radix-ui/react-accordion';
import data from '../../data/projects_data.json';

import { ChevronDown } from '@styled-icons/ionicons-outline';
import React from 'react';

import cgGif from '../../assets/gifs/random-cocktail.gif';
import ppGif from '../../assets/gifs/photo-website.gif';
import amGif from '../../assets/gifs/aol-messenger.gif';
import wpGif from '../../assets/gifs/whats-playing.gif';
import aiGif from '../../assets/gifs/announce-it.gif';
import rtGif from '../../assets/gifs/reel-talk.gif';

const gifs = [cgGif, amGif, ppGif, aiGif, wpGif, rtGif];

const ProjectsAccordion = () => {
  return (
    <Accordion.Root
      type="single"
      defaultValue="item-0"
      collapsible
      className="projects-accordion-root"
    >
      {data.map((item, i) => (
        <Accordion.Item value={`item-${i}`} className="projects-accordion-item">
          <Accordion.Trigger className="projects-accordion-trigger">
            {item.projectName}
            <ChevronDown className="projects-chevron" />
          </Accordion.Trigger>
          <Accordion.Content className="projects-accordion-content">
            <article className="projects-accordion-content-container">
              <div className="projects-content-left">
                <ul className="projects-bullet-list">
                  {item.info.bulletPoints.map((item) => (
                    <li>- {item}</li>
                  ))}
                </ul>
                <ul className="projects-tech-list">
                  {item.technologies.map((item) => (
                    <li className="projects-tech-li">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="projects-content-right">
                <img src={gifs[i]} width="300" height="168" alt="" />

                <p>{item.info.description}</p>
              </div>
            </article>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};

export default ProjectsAccordion;
