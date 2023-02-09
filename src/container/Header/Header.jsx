import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IoMailOutline } from 'react-icons/io5';
import { client, urlFor } from '../../client';
import './Header.scss';
import { images } from '../../constant';
import { AppWrap } from '../../wrapper';
import { queryAuthor } from '../../data';
const Header = () => {
  const [headerdata, setHeaderdata] = useState([]);
  useEffect(() => {
    client
      .fetch(queryAuthor)
      .then((data) => setHeaderdata(data))
      .catch(console.error);
  }, []);

  return (
    <div className="app__header">
      {headerdata?.map((header) => (
        <div key={header._id}>
          <div className="app__header-content">
            <div className="app__header-info">
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{
                  duration: [0.37],
                  ease: 'easeIn',
                }}
                className="app__header-badge"
              >
                <span>👋</span>
                <h4> hi, I'm!</h4>
              </motion.div>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: [0.5], ease: 'easeIn' }}
                className="app__header-name"
              >
                <h1>
                  {header?.name}
                  <span>{header?.lastname}</span>
                </h1>
              </motion.div>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: [0.5], ease: 'easeIn' }}
                className="app__header-based"
              >
                <p>
                  Based on <span>{header?.country}</span>
                </p>
              </motion.div>
              <div className="app__header-category">
                {header.work.map((work) => (
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{
                      duration: [0.5],
                      ease: 'easeIn',
                    }}
                    className="app__header-category__card"
                    key={work.title}
                  >
                    <p>{work.title}</p>
                  </motion.div>
                ))}
              </div>
              {/* tech stack */}
              <div className="app__header-stack">
                {header.skills.map((stack, index) => (
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{
                      duration: [0.5],
                      ease: 'easeIn',
                      delay: [`0.${index + 5}`],
                    }}
                    className="app__header-stack__items"
                    key={`stack-${index}`}
                  >
                    <img
                      loading="lazy"
                      src={urlFor(stack.image.asset.url)}
                      alt=""
                    />
                  </motion.div>
                ))}
              </div>

              <motion.a
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: [1], ease: 'easeIn' }}
                className="app__header-button"
                href="#contact"
              >
                <p>questions</p> <IoMailOutline />
              </motion.a>
            </div>
            <div className="app__header-image">
              <motion.img
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: [0.5], ease: 'easeIn' }}
                className="app__header-image__avatar"
                src={header.image.asset.url}
                alt="images"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppWrap(Header, 'home', '', `${images.bg}`);
