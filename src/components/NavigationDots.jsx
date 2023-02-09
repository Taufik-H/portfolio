import React from 'react';

function NavigationDots({ active }) {
  return (
    <div className="app__navigation">
      {['home', 'about', 'skills', 'work', 'testimonial', 'contact'].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            name="indicator"
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: '#3155d6' } : {}}
          />
        )
      )}
    </div>
  );
}

export default NavigationDots;
