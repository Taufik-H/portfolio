import React, { useState } from 'react';
import './Navbar.scss';
import { images } from '../../constant';
import { motion } from 'framer-motion';
import { HiBars3BottomLeft, HiChevronDoubleRight } from 'react-icons/hi2';
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {/* create navbar item */}
        {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map(
          (item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <a href={`#${item}`}>{item}</a>
              <div />
            </li>
          )
        )}
      </ul>
      {/* mobile */}
      <div className="app__navbar-menu">
        <HiBars3BottomLeft onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <HiChevronDoubleRight onClick={() => setToggle(false)} />
            <ul>
              {[
                'home',
                'about',
                'work',
                'skills',
                'testimonial',
                'contact',
              ].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;