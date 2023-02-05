import React, { useState } from 'react';
import './Tab.scss';
import { images } from '../../constant';
import { motion } from 'framer-motion';
const tabimg = [
  {
    experience: '2 month',
    name: 'react',
    img: [images.react],
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi voluptas praesentium optio ipsa voluptate animi deleniti, doloribus nemo quidem voluptatibus.',
  },
  {
    experience: '6 month',
    name: 'Laravel',
    img: [images.laravel],
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi voluptas praesentium optio ipsa voluptate animi deleniti, doloribus nemo quidem voluptatibus.',
  },
  {
    experience: '1 Years',
    name: 'figma',
    img: [images.figma],
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi voluptas praesentium optio ipsa voluptate animi deleniti, doloribus nemo quidem voluptatibus.',
  },
  {
    experience: '1,5 Years',
    name: 'bootstrap',
    img: [images.bootstrap],
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi voluptas praesentium optio ipsa voluptate animi deleniti, doloribus nemo quidem voluptatibus.',
  },
  {
    experience: '2 Years',
    name: 'Tailwindcss',
    img: [images.tailwindcss],
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi voluptas praesentium optio ipsa voluptate animi deleniti, doloribus nemo quidem voluptatibus.',
  },
];

function TabMenu() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="">
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
        <div className="app__skills-tech__desc">
          <h4>Laravel</h4>
          <div className="">
            <p>{tabimg[selectedTab].content}</p>

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
}

export default TabMenu;
