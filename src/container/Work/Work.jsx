import React, { useState } from 'react';
import './Work.scss';
import { images } from '../../constant';

const Work = () => {
  const workData = [
    {
      category: 'All',
      img: [images.react],
      title: 'Joke bapak bapak.',
    },
    {
      category: 'webdev',
      img: [images.react],
      title: 'Joke bapak bapak.',
    },
    {
      category: 'UI/UX',
      img: [images.react],
      title: 'Joke bapak bapak.',
    },
  ];
  const [selectedWork, setSelectedWork] = useState(0);

  return (
    <div className="app__work container">
      <div className="text__title-light" style={{ marginTop: -10 }}>
        <h4>
          {' '}
          This is <span>my portfolio</span> projects{' '}
        </h4>
        <div className="app__work-portfolio">
          <div className="work__category">
            {workData.map((getWork, index) => (
              <button className="work__button" key={index}>
                {getWork.category}
              </button>
            ))}
          </div>
          <div className="app__work-portfolio__projects">
            <div className="portfolio_card">
              <div className="portfolio__image">
                <div className="portfolio__detail">
                  <h4>Skolaxy</h4>
                  <div className="">web</div>
                  <div className="">web</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
