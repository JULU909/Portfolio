import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import './ProjectCard.css';

const ProjectCard = ({ imageSrc, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`project-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imageSrc} alt={title} />
      {isHovered && (
        <div className="project-title">
          <h3>{title}</h3>
        </div>
      )}
    </div>
  );
};

ProjectCard.propTypes = {
  imageSrc: PropTypes.string.isRequired, // Ensure image source is provided
  title: PropTypes.string.isRequired,    // Ensure title is provided
};

export default ProjectCard;
