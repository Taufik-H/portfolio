import React, { useState } from 'react';
import './Footer.scss';
import { images } from '../../constant';
import { client } from '../../client';
import { AppWrap } from '../../wrapper';
import { motion } from 'framer-motion';
import Giscus from '@giscus/react';
const Footer = () => {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__footer app__flex  "
    >
      <div className="app__footer-content">
        <div className="text__title-dark">
          <h1>
            Take A <span className="text-primary">Coffe{''}</span>&{' '}
            <span>Chat</span> With Me
          </h1>
        </div>
        <div className="footer__contact">
          <div className="footer__button">
            <div className="email__btn">
              <div className="btn-image">
                <img src={images.email} alt="" />
              </div>
              <a href="mailto:taufikh.dev@gmail.com">taufikh.dev@gmail.com</a>
            </div>
            <div className="number__btn">
              <div className="btn-image">
                <img src={images.whatsapp} alt="" />
              </div>
              <a href="https://wa.me/6283842061886">(+62) 838-4206-1886</a>
            </div>
          </div>
          <div className="app__footer-form app__flex">
            <Giscus
              id="comments"
              repo="Taufik-H/portfolio"
              repoId="R_kgDOI4xUZA"
              category="Comment"
              categoryId="DIC_kwDOI4xUZM4CUXjN"
              mapping="url"
              reactionsEnabled="1"
              term="Welcome to my portfolio!"
              emitMetadata="0"
              inputPosition="top"
              theme="preferred_color_scheme"
              lang="en"
              loading="lazy"
            />
          </div>
        </div>

        <div className="copyright">
          <p>
            @2023 Made with ❤️{' '}
            <a href="https://github.com/Taufik-H">Taufik-H</a> all right
            reserved
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AppWrap(Footer, 'contact', 'border-top');
