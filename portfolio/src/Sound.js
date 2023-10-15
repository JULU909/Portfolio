import React from 'react';
import './Sound.css';

const Sound = () => {
  return (
    <div className="sound-analysis">
      <div className="sound-analysis-image">
        <img src={process.env.PUBLIC_URL + '/greenRipple.png'} alt="Sound Analysis Project" />
      </div>
      <div className="sound-analysis-description">
        <h2 className="vibrate">Sound Anomaly Project</h2>
        <p>- Project for the Singapore Navy based on preventive maintanence</p>
        <p>- Used Data science & Machine learning to identify anomalies in the sounds of machinery </p>
        <p>- Build models for the data pipeline </p>
        <p>- Ex : On/OFf classifcation models , Models to cluster machine sounds to different modes , Models to remove noise</p>
        <p>- Wrote Adhoc scripts for data cleaning, extraction , migration , and querying on a regular basis</p>
        <p>- Technologies Used: Docker , Python , EC2 , MLflow , S3 </p>
      </div>
    </div>
  );
};

export default Sound;
