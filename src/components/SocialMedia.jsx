import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaGithub } from 'react-icons/fa';
function SocialMedia() {
  return (
    <div className="app__social">
      <div>
        <a href="https://github.com/Taufik-H">
          <FaGithub />
        </a>
      </div>
      <div>
        <a href="https://instagram.com/opikhere">
          <BsInstagram />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/TaufikH.me/">
          <FaFacebookF />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
