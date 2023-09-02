import React from 'react';
import { Link } from 'react-router-dom';
import './project.css';

const Project = ({ title, image, link }) => {
  return (
    <div>
    <div>
        <h3 className="main-title">{"Success is never the result of a single grand gesture"}</h3>

    </div>
    <Link to={link} className="project-box">
      <img src={process.env.PUBLIC_URL + '/candychessVapourwave.png'} alt={title} className="project-image" />
      <h3 className="project-title">{"Candy Chess AI"}</h3>
    </Link>
    </div>
  );
};

export default Project