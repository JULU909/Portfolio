import { Link } from 'react-router-dom';
import './project.css';
import ProjectCard from './projectCard';
import React, { useEffect, useState } from 'react';

const Project = ({ title, image, link }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  
  return (

    <div className="project-page">
      <h1 className={`project-heading ${isScrolled ? 'scrolled' : ''}`}>Project Work</h1>
      {/* Your project cards or content go here */}
      <ProjectCard
          imageSrc={process.env.PUBLIC_URL + '/candychessVapourwave.png'}
          title="Candy Chess AI"
        />
    </div>

    
  );
};

export default Project