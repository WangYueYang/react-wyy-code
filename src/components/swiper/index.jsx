import React, { useState, useEffect, useRef } from 'react';

import './index.css';

const Swiper = ({children}) => {
  const swiperRef = useRef(null);
  const contentRef = useRef(null);
  const [count, setCount] = useState(0);
  const timer = useRef();

  const runTime = () => {
    timer.current = setInterval(() => {
      setCount((count) => count === children.length ? 1 : ++count);
    }, 2000);
  };
  useEffect(() => {
    runTime();
  }, []);
  
  const setTransition = () => {
    const left = count * swiperRef.current.offsetWidth;
    const style = contentRef.current.style

    style.transition = 'all .5s';
    style.transform = `translateX(-${left}px)`;

    if (count === children.length) {
      setTimeout(() => {
        style.transition = 'none';
        style.transform = `translateX(-${0}px)`;
      }, 600);
    }
  };
  useEffect(() => {
    setTransition();
  }, [count]);

  return (
    <div
      className="swiper"
      ref={swiperRef}
      onMouseOver={() => clearInterval(timer.current)}
      onMouseOut={runTime}
    >
      <div
        ref={contentRef}
        className="swiper-content"
      >
        {children}
        {children[0]}
      </div>
    </div>
  );
};

export default Swiper;
