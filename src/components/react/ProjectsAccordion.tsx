import type React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import * as Accordion from '@radix-ui/react-accordion';
import data from '../../data/projects_data.json';

import { ChevronDown } from '@styled-icons/ionicons-outline';
import { Github } from '@styled-icons/boxicons-logos';
import { OpenInNew } from '@styled-icons/material-outlined';

import cgGif from '../../assets/gifs/random-cocktail.gif';
import ppGif from '../../assets/gifs/photo-website.gif';
import amGif from '../../assets/gifs/aol-messenger.gif';
import wpGif from '../../assets/gifs/whats-playing.gif';
import aiGif from '../../assets/gifs/announce-it.gif';
import rtGif from '../../assets/gifs/reel-talk.gif';
import hpGif from '../../assets/gifs/hotel-page.gif';
import ggGif from '../../assets/gifs/galaxy-gen.gif';

const gifs = [ppGif, hpGif, ggGif, cgGif, amGif, aiGif, wpGif, rtGif];

const ProjectsAccordion = () => {
  return (
    <Accordion.Root
      type="single"
      defaultValue="item-2"
      collapsible
      className="projects-accordion-root"
    >
      {data.map((item, i) => (
        <Accordion.Item
          value={`item-${i}`}
          className="projects-accordion-item"
          key={i}
        >
          <Accordion.Trigger className="projects-accordion-trigger">
            {item.projectName}
            <ChevronDown className="projects-chevron" />
          </Accordion.Trigger>
          <Accordion.Content className="projects-accordion-content">
            <article className="projects-accordion-content-container">
              <div className=" projects-content-left">
                <div className="projects-content-card">
                  <p>{item.info.description}</p>
                  <ul className="projects-tech-list">
                    {item.technologies.map((item, i) => (
                      <>
                        <li key={i} className="projects-tech-li">
                          {item}
                        </li>
                      </>
                    ))}
                  </ul>
                </div>
                <span className="projects-links-span desktop">
                  <ProjectsLinkTooltip
                    iconKey={1}
                    url={item.githubUrl}
                    className={'projects-github-icon'}
                  />
                  {item.isFullyFunctional ? (
                    <ProjectsLinkTooltip
                      iconKey={0}
                      url={item.liveUrl}
                      className={'projects-new-window-icon'}
                    />
                  ) : null}
                  <MoreInfoTooltip items={item.info.bulletPoints} />
                </span>
              </div>
              <div className="projects-content-right">
                <img
                  src={gifs[i]}
                  alt={`${item.projectName}`}
                  className="projects-gif"
                />
                <span className="projects-links-span mobile">
                  <Tooltip.Provider>
                    <ProjectsLinkTooltip
                      iconKey={1}
                      url={item.githubUrl}
                      className={'projects-github-icon'}
                    />
                    {item.isFullyFunctional ? (
                      <ProjectsLinkTooltip
                        iconKey={0}
                        url={item.liveUrl}
                        className={'projects-new-window-icon'}
                      />
                    ) : null}
                  </Tooltip.Provider>
                </span>
              </div>
            </article>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};

export default ProjectsAccordion;

interface Props {
  url: string;
  className: string;
  iconKey: number;
}

const ProjectsLinkTooltip: React.FC<Props> = ({ url, className, iconKey }) => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger className="socials-trigger">
          <a href={url} target="_blank" rel="noopener noreferrer">
            {iconKey === 1 ? (
              <Github className={className} />
            ) : (
              <OpenInNew className={className} />
            )}
          </a>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="socials-content"
            sideOffset={5}
            side="bottom"
          >
            {iconKey === 1 ? 'Source code' : 'Live demo'}
            <Tooltip.Arrow className="socials-tooltip-arrow" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

interface MoreInfoProps {
  items: string[];
}

const MoreInfoTooltip: React.FC<MoreInfoProps> = ({ items }) => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger className="more-info-trigger">
          More info...
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="socials-content"
            sideOffset={5}
            side="bottom"
          >
            <ul className="more-info-ul">
              {items.map((item, i) => (
                <li className="more-info-li" key={i}>
                  {item}
                </li>
              ))}
            </ul>
            <Tooltip.Arrow className="socials-tooltip-arrow" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
