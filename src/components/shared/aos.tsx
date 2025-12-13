'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSInitializer = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      mirror: true,   // Animate again when scrolling up
      once: false,    // Allow repeat animation
      delay: 0,
      duration: 1500,
      offset: 0,
    });

    // Manually trigger animation on already visible elements
    const triggerVisibleAnimations = () => {
      document.querySelectorAll('[data-aos]').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          el.classList.add('aos-animate');
        }
      });
    };

    // Delay to allow DOM to paint
    const timeout = setTimeout(() => {
      triggerVisibleAnimations();
    }, 100);

    return () => clearTimeout(timeout); // Cleanup timeout
  }, []);

  return null; // No UI, just functionality
};

export default AOSInitializer;
