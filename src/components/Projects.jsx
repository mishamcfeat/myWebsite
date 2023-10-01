import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, website } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const iconHover = {
  hover: { y: -5 },
};

const ProjectCard = ({
  index,
  name,
  points,
  tags,
  image,
  source_code_link,
  website_link, 
}) => {
  return (
    <div className='relative w-full bg-tertiary p-5 rounded-2xl mb-4'>
      <div className="grid grid-cols-2 gap-4 w-full">
        <div>
          <div className='flex items-center gap-4 mb-4'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
          <ul className='list-disc ml-4 space-y-2'>
            {points.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className='text-white-100 text-[14px] pl-1 tracking-wider'
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          className='transition-transform duration-300 hover:scale-110'
        >
          <img
            src={image}
            alt='project_image'
            className='object-contain w-full h-auto rounded-2xl'
          />
        </motion.div>
        <div className='absolute bottom-5 right-7 flex gap-3'>
          <motion.div
            variants={iconHover}
            whileHover="hover"
            onClick={() => window.open(website_link, "_blank")}
            className='cursor-pointer'
          >
            <img
              src={website}
              alt='website'
              className='w-10 h-10 object-contain'
            />
          </motion.div>
          <motion.div
            variants={iconHover}
            whileHover="hover"
            onClick={() => window.open(source_code_link, "_blank")}
            className='cursor-pointer'
          >
            <img
              src={github}
              alt='source code'
              className='w-10 h-10 object-contain'
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};


const Projects = () => {
  return (
      <>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} `}>My work</p>
          <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        </motion.div>

        <div className='w-full flex'>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described with
            links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div>

        <div className='mt-20'>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </>
      );
};

      export default SectionWrapper(Projects, "projects");