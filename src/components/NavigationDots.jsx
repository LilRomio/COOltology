import React from 'react';

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {['home', 'COOltology is', 'what we do', 'our team', 'more on COOltology', "let's talk"].map((item, index) => (
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
