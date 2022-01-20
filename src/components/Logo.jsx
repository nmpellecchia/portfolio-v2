import React, { useEffect, useState, useRef } from 'react';
import logo from '../imgs/logo/pellecchia-logo.svg';

function Logo() {
  const [offset, setOffset] = useState(0);
  const imageRef = useRef();

  useEffect(() => {
    // fn to update the rotation based on how much the user scrolled
    const onScroll = () => {
      setOffset(window.pageYOffset / 5);
      imageRef.current.style.transform = `rotate(${offset}deg)`;
    };
    // Clean up
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [offset]);

  return (
    <div className="sticky top-0 z-50">
      <a
        href="#home"
        className="absolute right-2 top-2 w-24 h-24 md:w-32 md:h-32"
      >
        <img
          ref={imageRef}
          src={logo}
          alt="Back to top logo"
          title="Back to top"
          className="origin-center"
        />
      </a>
    </div>
  );
}

export default Logo;
