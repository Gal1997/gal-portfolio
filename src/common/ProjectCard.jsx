import React from 'react';
import { useTheme } from '../common/ThemeContext';

function ProjectCard({ src, link, title, description, techStack }) {
  const { theme, toggleTheme } = useTheme();
  return (
    <a
      href={link}
      target="_blank"
      style={
        theme === 'light'
          ? { boxShadow: '0 4px 16px rgba(0,0,0,0.15)', borderRadius: '50px', padding: '0px 10px 20px 10px' }
          : undefined
      }
    >
      <img className="hover" src={src} alt={`${title} logo`} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p style={{ fontSize: '13px', paddingTop: '5px', fontStyle: "italic" }}>{techStack}</p>
    </a>
  );
}

export default ProjectCard;
