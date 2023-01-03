import type React from 'react';

import {
  Mongodb,
  Postgresql,
  Typescript,
  Javascript,
  Html5,
  Css3,
  ReactLogo,
  Nodedotjs,
  Express,
  Firebase,
  Tailwindcss,
  Styledcomponents
} from '@styled-icons/simple-icons';

const SkillsContainer = () => {
  return (
    <article className="skills-container">
      {icons.map((tech) => (
        <IconCard icon={tech.icon} name={tech.name} />
      ))}
    </article>
  );
};

export default SkillsContainer;

interface Props {
  icon: JSX.Element;
  name: string;
}

const IconCard: React.FC<Props> = ({ icon, name }) => {
  return (
    <div className="skills-item-card" data-name={`${name}`}>
      {icon}
      <p className="skills-name">{name}</p>
    </div>
  );
};

const icons = [
  {
    icon: <Html5 className="skills-icon" aria-label="HTML Icon" />,
    name: 'HTML5'
  },
  {
    icon: <Css3 className="skills-icon" aria-label="CSS Icon" />,
    name: 'CSS3'
  },
  {
    icon: <Javascript className="skills-icon" aria-label="Javascript Icon" />,
    name: 'Javascript'
  },
  {
    icon: <Typescript className="skills-icon" aria-label="Typescript Icon" />,
    name: 'TypeScript'
  },
  {
    icon: <ReactLogo className="skills-icon" aria-label="React Icon" />,
    name: 'React'
  },
  {
    icon: <Nodedotjs className="skills-icon" aria-label="Node JS Icon" />,
    name: 'NodeJS'
  },
  {
    icon: <Express className="skills-icon" aria-label="Express JS Icon" />,
    name: 'Express'
  },
  {
    icon: <Mongodb className="skills-icon" aria-label="Mongo DB Icon" />,
    name: 'MongoDB'
  },
  {
    icon: <Postgresql className="skills-icon" aria-label="Postgres SQL Icon" />,
    name: 'PostgreSQL'
  },
  {
    icon: <Firebase className="skills-icon" aria-label="Firebase Icon" />,
    name: 'Firebase'
  },
  {
    icon: (
      <Tailwindcss className="skills-icon" aria-label="Tailwind CSS Icon" />
    ),
    name: 'TailwindCSS'
  },
  {
    icon: <Styledcomponents className="skills-icon" />,
    name: 'Styled Components'
  }
];
