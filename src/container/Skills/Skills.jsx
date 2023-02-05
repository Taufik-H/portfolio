import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Skills.scss';
import { images } from '../../constant';
import { AppWrap } from '../../wrapper';
import { Typewriter, useTypewriter } from 'react-simple-typewriter';
import { client, urlFor } from '../../client';
const Skills = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const query = `*[_type == "skills"]{
     ...
    }`;
    client.fetch(query).then((data) => setSkills(data));
  }, []);
  const filter = skills.filter((item, index) => index === selectedTab);
  console.log(filter);
  return (
    <div className="app__skills">
      <div className="">
        <div className="text__title-dark" style={{ marginTop: 50 }}>
          <h4>
            {' '}
            i can make <span>something cool</span> with{' '}
          </h4>
        </div>
        <div className="app__skills-content">
          <div className="app__skills-tech">
            <div className="app__skills-tech__title">
              <h5>Technology Stack</h5>
              {filter.map((item) => (
                <Typewriter
                  words={[`${item.title}`]}
                  loop={true}
                  cursor={true}
                  cursorStyle="_"
                  key={item._id}
                />
              ))}
            </div>
            <div className="app__skills-tech__lists">
              <div className="app__skills-list__card">
                {skills.map((stack, index) => (
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
                    <img src={urlFor(stack.image)} alt="" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          {filter.map((item) => (
            <div className="app__skills-tech__desc" key={item.title}>
              <h4>{item.title}</h4>
              <p className="text-content">{item.description}</p>
              <div className="app__skills-tech_exp">
                <img src={urlFor(item.image)} alt="" />
                <div className="level">
                  <h6>{item.title}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppWrap(Skills, 'skills');
