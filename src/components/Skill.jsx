import React, { useEffect, useRef, useState } from 'react'

const Skill = ({ targetValue, skill }) => {
  const skillRef = useRef(null);
  const [counter, setCounter] = useState(0);
  const [isDone, setIsDone] = useState(false);


  useEffect(() => {
    if (!isDone) {
      
      const increment = () => {
        if (window.scrollY > skillRef.current.offsetTop) {
          setCounter(prevCounter => {
            const newCounter = prevCounter + 1;

            if (newCounter === targetValue) {
              setIsDone(true);
              clearInterval(intervalId);
            }

            return newCounter;
          });
        }
      }
    
      const intervalId = setInterval(increment, 15);
    
      return () => clearInterval(intervalId);
    }
  }, []);

  return (
    <div className="skill col-md-3 col-sm-4 col-6 mt-3" ref={skillRef}>
      <div className="circular-progress" style={{
        background: `conic-gradient(var(--main-color) ${counter * 3.6}deg, var(--section-color-2) 0deg)`
      }}>
        <div className="inner-circle"></div>
        <p className="info m-0 text-center">
          <span className="percentage">{counter}%</span>
          <span className="title">{skill}</span>
        </p>
      </div>
    </div>
  )
}

export default Skill