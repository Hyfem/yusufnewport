import React, { useEffect, useState } from 'react';
import './index.css';

const AnimatedLetter = ({ letterClass, strArray, idx }) => {
  const [activeClass, setActiveClass] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveClass('active');
    }, 100 * idx); 

    return () => clearTimeout(timer);
  }, [idx]);

  return (
    <span>
      {strArray.map((char, i) => (
        <span key={`${char} -${ i }`} className={`${letterClass} _${i + idx} ${activeClass}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetter;
