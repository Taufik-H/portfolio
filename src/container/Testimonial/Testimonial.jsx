import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Testimonial.scss';
import { AppWrap } from '../../wrapper';
import { queryTestimonial } from '../../data';
import { client, urlFor } from '../../client';
import { AiOutlineLine, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonial, setTestimonial] = useState([]);
  const handleClick = (index) => {
    setCurrentIndex(index);
  };
  useEffect(() => {
    client.fetch(queryTestimonial).then((data) => {
      setTestimonial(data);
    });
  }, []);

  return (
    <>
      {testimonial.length && (
        <>
          <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__testimonial app__flex "
          >
            <div className="app__testimonial-content">
              <div className="text__title-dark">
                <h4>
                  {' '}
                  What <span> people's</span> say{' '}
                </h4>
              </div>
              <motion.div
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <div className="app__testimonial-image">
                  <div className="app__testimonial-image__circle">
                    <img
                      src={urlFor(testimonial[currentIndex].image.asset.url)}
                      alt={testimonial[currentIndex].name}
                    />
                  </div>
                </div>
                <div className="app__testimonial-detail">
                  <h4>{testimonial[currentIndex].name}</h4>
                  <div className="app__testimonial-detail__comp">
                    <h5>{testimonial[currentIndex].companyname}</h5>
                    <div className="dot" />
                    <h5>{testimonial[currentIndex].jobdesk}</h5>
                  </div>
                  <p>"{testimonial[currentIndex].feedback}"</p>
                  <div className="testimonial__date">
                    <AiOutlineLine /> February 1, 2023 <AiOutlineLine />
                  </div>
                </div>
              </motion.div>
              <div className="app__testimonial-btn">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className="testimonial__icon"
                  onClick={() =>
                    handleClick(
                      currentIndex === 0
                        ? testimonial.length - 1
                        : currentIndex - 1
                    )
                  }
                >
                  <AiOutlineLeft />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className="testimonial__icon"
                  onClick={() =>
                    handleClick(
                      currentIndex === testimonial.length - 1
                        ? 0
                        : currentIndex + 1
                    )
                  }
                >
                  <AiOutlineRight />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
};

export default AppWrap(Testimonial, 'testimonial');
