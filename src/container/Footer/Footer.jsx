import React, { useState } from 'react';
import './Footer.scss';
import { images } from '../../constant';
import { client } from '../../client';
import { AppWrap } from '../../wrapper';
import { motion } from 'framer-motion';
const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__footer app__flex  "
    >
      <div className="app__footer-content">
        <div className="text__title-dark">
          <h4>
            Take A <span className="text-primary">Coffe{''}</span>&{' '}
            <span>Chat</span> With Me
          </h4>
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
          <h5>or</h5>
          {!isFormSubmitted ? (
            <div className="app__footer-form app__flex">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={handleChangeInput}
                  name="name"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={handleChangeInput}
                  name="email"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  className=""
                  value={message}
                  placeholder="Your Massage"
                  onChange={handleChangeInput}
                ></textarea>
              </div>
              <button type="button" onClick={handleSubmit}>
                {loading ? 'sending' : 'Send Message'}
              </button>
            </div>
          ) : (
            <div className="thanks">
              <h4>I just wanna say</h4>
              <div className="image_thanks">
                <img src={images.thanks} alt="thanks" />
              </div>
            </div>
          )}
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
