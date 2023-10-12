import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Aboutme from './Aboutme';
import Project from './projects';

import { useSpring, animated } from 'react-spring';
import { Scrollama, Step } from 'react-scrollama';

function App() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const steps = [
    { id: 'home', text: 'Home' }, // Include the Home page in the steps array

    { id: 'project', text: 'Project' },
    { id: 'page2', text: 'Page 2' },
    { id: 'page3', text: 'Page 3' },
  ];

  const onStepChange = (step) => {
    setCurrentStepIndex(step.data);
  };

  const springProps = useSpring({
    opacity: currentStepIndex === 0 ? 1 : 0,
    transform: currentStepIndex === 0 ? 'translateY(0px)' : 'translateY(-100px)',
  });

  return (
    <div className="App">
      <div className="content">
        <Scrollama onStepChange={onStepChange}>
          {steps.map((step, index) => (
            <Step key={index} data={index}>
              <div className={`step ${step.id === 'home' ? 'home' : ''}`}>
                {step.id === 'home' ? ( // Render the Home component for the Home page
                  <Home />
                ) : step.id === 'project' ? (
                  <Project/> // Render the Projects component for the Projects page
                ) : (
                  <animated.h2 style={springProps}>{step.text}</animated.h2>
                )}
                
              </div>
            </Step>
            
          ))}
        </Scrollama>
      </div>
    </div>
  );
}
export default App;
