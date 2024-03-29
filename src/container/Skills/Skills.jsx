import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Skills.scss';
import { AppWrap } from '../../wrapper';
import { Typewriter } from 'react-simple-typewriter';
import { client, urlFor } from '../../client';
import { queryEcperience, querySkills } from '../../data';
const Skills = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  useEffect(() => {
    client.fetch(querySkills).then((data) => setSkills(data));
    client.fetch(queryEcperience).then((data) => setExperience(data));
  }, []);
  const filter = skills.filter((item, index) => index === selectedTab);
  const writer = skills.map((item) => item.title);

  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__skills"
    >
      <div className="">
        <div className="text__title-dark" style={{ marginTop: 50 }}>
          <h1>
            {' '}
            My <span>Skills</span> and <span>experiences</span>
          </h1>
        </div>
        <div className="app__skills-content">
          <div className="app__skills-tech">
            <div className="app__skills-tech__title">
              <p>Technology Stack</p>

              <Typewriter
                words={writer}
                loop={true}
                cursor={true}
                cursorStyle="_"
                key={writer}
                className="typing"
              />
            </div>
            <div className="app__skills-tech__lists">
              <div className="app__skills-list__card">
                {skills.map((stack, index) => (
                  <motion.button
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
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
          {filter.map((item) => (
            <div className="app__skills-tech__desc" key={item.title}>
              <p>Experiences :</p>
              <div className="app__skills-tech_exp">
                <img src={urlFor(item.image)} alt="" />
                <div className="level">
                  <h2>{item.title}</h2>
                  <p>{item.totalprojects}</p>
                </div>
              </div>
              {experience.map((experience) => (
                <div className="experience" key={experience._id}>
                  <div className="experience-work">
                    <div className="exwrap">
                      <h2>{experience.year}</h2>
                      <div className="jobdesk">{experience.jobdesk}</div>
                    </div>
                    <p>{experience.descripton}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AppWrap(Skills, 'skills');
