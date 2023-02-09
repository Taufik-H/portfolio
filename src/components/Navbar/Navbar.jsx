import React, { useState } from 'react';
import './Navbar.scss';
import { images } from '../../constant';
import { motion } from 'framer-motion';
import { HiBars3BottomLeft, HiChevronDoubleRight } from 'react-icons/hi2';
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(0);
  const handleActive = (index) => {
    setActive(index);
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {/* create navbar item */}
        {['home', 'about', 'skills', 'work', 'testimonial', 'contact'].map(
          (item, index) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <a
                href={`#${item}`}
                onClick={() => handleActive(index)}
                className={'text-secondary'}
              >
                {item}
              </a>
              <div />
            </li>
          )
        )}
      </ul>
      {/* mobile */}
      <div className="app__navbar-menu">
        <HiBars3BottomLeft
          onClick={() => setToggle(true)}
          style={{ cursor: 'pointer' }}
        />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <HiChevronDoubleRight
              onClick={() => setToggle(false)}
              style={{ cursor: 'pointer' }}
            />
            <ul>
              {[
                'home',
                'about',
                'skills',
                'work',
                'testimonial',
                'contact',
              ].map((item, index) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={() => setToggle(false)}
                    className={index === active ? 'nav__active' : ''}
                  >
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
