import React from 'react';
import { NavigationDots, SocialMedia } from '../components';

const AppWrap = (Component, idName, classNames, styles) =>
  function HOC() {
    return (
      <div
        id={idName}
        className={`app__container ${classNames}`}
        style={{ backgroundImage: `url(${styles})` }}
      >
        <SocialMedia />
        <div className="app__wrapper">
          <Component />
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
