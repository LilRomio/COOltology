import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './style.module.scss';

export default function Button({ isActive, toggleMenu }) {
  const buttonRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        toggleMenu();
      }
    };

    if (isActive) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isActive, toggleMenu]);

  return (
    <div
      ref={buttonRef}
      className={styles.button}
      onClick={() => {
        toggleMenu();
      }}
    >
      {isActive ? (
        <div className={styles.el}>
          <PerspectiveText label="Close" />
        </div>
      ) : (
        <div className={styles.el}>
          <PerspectiveText label="Menu" />
        </div>
      )}
    </div>
  );
}

function PerspectiveText({ label }) {
  return (
    <div className={styles.perspectiveText}>
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
}
