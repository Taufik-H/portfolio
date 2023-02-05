import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { client, urlFor } from '../../client';
import { PortableText } from '@portabletext/react';
import './About.scss';
import { AppWrap } from '../../wrapper';
const About = () => {
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const query = `*[_type == "author"]{
      about[]{
        ...,
      }}`;

    client
      .fetch(query)
      .then((data) => setAbouts(data[0]))
      .catch(console.error);
  }, []);

  return (
    <div className="bg-dark app__about">
      <div className="text__title-light">
        <motion.h4
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: [0.5], ease: 'easeInOut' }}
        >
          I will <span className="text-primary">Introduce{''}</span>
          my self
        </motion.h4>
      </div>

      <div className="text-md app__flex">
        <motion.div
          className="app__about-content"
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: [1], ease: 'easeInOut' }}
        >
          <PortableText value={abouts.about} />
        </motion.div>
      </div>
    </div>
  );
};

export default AppWrap(About, 'about', 'bg-dark');
