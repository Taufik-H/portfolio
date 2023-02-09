import React, { useState, useEffect } from 'react';
import { client, urlFor } from '../../client';
import { FaGithub, FaEye } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import './Work.scss';

function Work() {
  const [activetags, setActivetags] = useState(0);
  const [tags, setTags] = useState([]);

  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterWork, setFilterWork] = useState([]);
  const [work, setWork] = useState([]);
  useEffect(() => {
    const queryWork = `*[_type == "project"]{
      ...,
      tool[]->,
      tag[]->,
      image{
        asset->{
          url
        }
      }
      }`;
    const queryTag = `*[_type == "tag"]`;

    client.fetch(queryWork).then((data) => {
      setWork(data);
      setFilterWork(data);
    });
    client.fetch(queryTag).then((data) => setTags(data));
  }, []);

  const handleFilterWork = (item) => {
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === 'All') {
        setFilterWork(work);
      } else {
        setFilterWork(work.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__work "
    >
      <div className="app__work-content">
        <div className="text__title-light">
          <h4>
            {' '}
            this is <span>my portfolio</span> projects{' '}
          </h4>
          <div className="app__work-project">
            <div className="app__work-project__filter">
              {tags.map((tags, index) => (
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileFocus={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                  onClick={() =>
                    setActivetags(index) & handleFilterWork(tags.name)
                  }
                  className={
                    index === activetags ? 'active_tag' : 'unactive_tag'
                  }
                  key={tags._id}
                >
                  {tags.name}
                </motion.button>
              ))}
            </div>

            <div className="app__work-project-card">
              {filterWork.map((work, index) => (
                <motion.div
                  animate={animateCard}
                  whileHover={{ scale: 1.05 }}
                  transition={{
                    duration: [0.3],
                    ease: 'easeInOut',
                    delayChildren: 0.5,
                  }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                  className="app__card"
                  key={work._id}
                >
                  <div className="">
                    <div className="image__preview">
                      <img src={urlFor(work.image.asset.url)} alt={work.name} />
                      <div className="work__icon">
                        <motion.div>
                          <a href={work.linksource} aria-label="sourcecode">
                            <FaGithub />
                          </a>
                        </motion.div>
                        <motion.div>
                          <a href={work.linkdemo} aria-label="demo">
                            <FaEye />
                          </a>
                        </motion.div>
                      </div>
                    </div>
                    <div className="work__detail">
                      <div className="work__title">
                        <h3>{work.name}</h3>
                      </div>

                      <div className="work__tag">
                        <div>
                          <p>{work.tags[0]}</p>
                        </div>
                      </div>
                      <div className="work__tool">
                        {work.tool.map((tool, index) => (
                          <div className="tool__image" key={tool._id}>
                            <img src={urlFor(tool.image)} alt={tool.name} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AppWrap(Work, 'work', 'bg-dark');
