import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Skills.scss';
import { images } from '../../constant';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Skills = () => {
  const tabimg = [
    {
      experience: '2 month',
      name: 'react',
      img: [images.react],
      content: 'Lorem ipsum, dolor sit',
    },
    {
      experience: '6 month',
      name: 'Laravel',
      img: [images.laravel],
      content: 'I use this framework to create 4 website.',
    },
    {
      experience: '1 Years',
      name: 'figma',
      img: [images.figma],
      content: '.',
    },
    {
      experience: '1,5 Years',
      name: 'bootstrap',
      img: [images.bootstrap],
      content:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi voluptas praesentium optiom voluptatibus.',
    },
    {
      experience: '2 Years',
      name: 'Tailwindcss',
      img: [images.tailwindcss],
      content:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi voluptas pramo quidem voluptatibus.',
    },
  ];
  const [selectedTab, setSelectedTab] = useState(0);
  const [stackName] = useTypewriter({
    words: ['laravel', 'react', 'figma', 'bootstrap', 'tailwindcss'],
    loop: 0,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });
  return (
    <div className="app__skills container">
      <div className="text__title-dark" style={{ marginTop: -10 }}>
        <h4>
          {' '}
          i can make <span>something cool</span> with{' '}
        </h4>
      </div>
      <div className="app__skills-content">
        <div className="app__skills-tech">
          <div className="app__skills-tech__title">
            <h5>Technology Stack</h5>
            <p>
              <span>{stackName}</span>
              <Cursor cursorStyle="_" />
            </p>
          </div>
          <div className="app__skills-tech__lists">
            <div className="app__skills-list__card">
              {tabimg.map((tab, index) => (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                  whileTap={{ scale: 0.9 }}
                  key={index}
                  onClick={() => setSelectedTab(index)}
                  className={`app__skills-list__items ${
                    selectedTab === index ? 'active' : ''
                  }`}
                >
                  <img src={tab.img} alt="" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="app__skills-tech__desc">
          <h4>{tabimg[selectedTab].name}</h4>
          <div className="">
            {/* <p className="text-content">{tabimg[selectedTab].content}</p> */}

            <div className="app__skills-tech_exp">
              <img src={tabimg[selectedTab].img} alt="laravel" />
              <div className="level">
                <h6>{tabimg[selectedTab].name}</h6>
                <p>{tabimg[selectedTab].experience}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
