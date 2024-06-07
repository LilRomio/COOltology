import React from 'react';

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {['Hello!', 'Cooltology is', 'We Do', 'We Are', "Let's talk"].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: 'var(--primary-color)' } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
