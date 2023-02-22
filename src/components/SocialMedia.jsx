import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaGithub } from 'react-icons/fa';
function SocialMedia() {
  return (
    <div className="app__social">
      <div>
        <a href="https://github.com/Taufik-H" aria-label="GitHub">
          <FaGithub />
        </a>
      </div>
      <div>
        <a href="https://instagram.com/hai.opit" aria-label="Instagram">
          <BsInstagram />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/TaufikH.me/" aria-label="Facebook">
          <FaFacebookF />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
