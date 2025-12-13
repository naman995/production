'use client';

import { useEffect, useState } from 'react';
import '@/assets/css/preloader.css';

const Preloader = () => {
  const [hidden, setHidden] = useState(false);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setOpacity(0);
      const hideTimer = setTimeout(() => {
        setHidden(true);
      }, 1000);
      return () => clearTimeout(hideTimer);
    }, 800);

    return () => clearTimeout(fadeOutTimer);
  }, []);

  if (hidden) return null;

  return (
    <div
      className="preloader"
      style={{ opacity, transition: 'opacity 1s ease' }}
    >
      <div className="loader"></div>
    </div>
  );
};

export default Preloader;
