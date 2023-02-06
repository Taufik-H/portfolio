import React, { useState, useEffect } from 'react';
import { client, urlFor } from '../../client';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import './Work.scss';

function Work() {
  const [activetags, setActivetags] = useState(0);
  const [filter, setFilter] = useState(0);
  const [work, setWork] = useState([]);
  const [tags, setTags] = useState([]);
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

    client.fetch(queryWork).then((data) => setWork(data));
    client.fetch(queryTag).then((data) => setTags(data));
  }, []);

  return (
    <div className="app__work ">
      <div className="app__work-content">
        <div className="text__title-light">
          <h4>
            {' '}
            this is <span>my portfolio</span> projects{' '}
            {/* {work.map((item, index) => (
              <div className="" key={index}>
                <h1>{item.name}</h1>
                {item.tool.map((tool) => (
                  <div className="" key={tool.name}>
                    <h1>{tool.name}</h1>
                  </div>
                ))}
                {item.tag.map((tag) => (
                  <div className="" key={tag.name}>
                    <h1>{tag.name}</h1>
                  </div>
                ))}

                <img src={urlFor(item.image.asset.url)} alt="" />
              </div>
            ))} */}
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
                  onClick={() => setActivetags(index)}
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
              {work.map((work, index) => (
                <div className="app__card" key={work._id}>
                  <div className="">
                    <div className="image__preview">
                      <img src={urlFor(work.image.asset.url)} alt={work.name} />
                    </div>
                    <div className="work__detail">
                      <h3>{work.name}</h3>
                      <div className="work__tag">
                        {work.tag.map((tag) => (
                          <div key={tag._id}>
                            <p>{tag.name}</p>
                          </div>
                        ))}
                      </div>
                      <div className="work__tool">
                        {work.tool.map((tool, index) => (
                          <div className="tool__image" key={tool._id}>
                            <img src={urlFor(tool.image)} alt={tool.name} />
                            {console.log(tool.image)}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppWrap(Work, 'work', 'bg-dark');
