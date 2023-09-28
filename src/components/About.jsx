import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { technologies } from "../constants";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, setActiveService }) => (
  <Tilt
    className='xs:w-[250px] w-full'
    onMouseEnter={() => setActiveService(title)} // set on hover
    onMouseLeave={() => setActiveService(null)}  // reset when hover ends
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const SmallCard = ({ icon, name, activeService, serviceGroup }) => {
  console.log("activeService is:", activeService, "and serviceGroup is:", serviceGroup); // Debug line
  const isActive = activeService === serviceGroup;

  return (
    <div className={`w-32 h-32 p-4 rounded-md flex flex-col items-center ${isActive ? 'grayscale' : 'grayscale-100'}`}>
      <img src={icon} alt={icon} className='w-full h-full object-cover rounded-md mb-2' />
      <span className="text-white text-sm">{name}</span>
    </div>
  );
};


const About = () => {
  const [activeService, setActiveService] = useState(null);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-2 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a motivated graduate from Warwick University, adept in both front-end and back-end development. With hands-on experience in Python, JavaScript, and cloud technologies, I've successfully orchestrated projects from concept to completion. Equipped with relevant certifications and a keen understanding of modern development tools, I'm ready to contribute to and elevate any software engineering team.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
            setActiveService={setActiveService}
          />
        ))}
      </div>

      <div className='mt-10 flex flex-wrap gap-10 justify-center'>
        {technologies.map((technology) => (
          <SmallCard
            key={technology.name}
            icon={technology.icon}
            name={technology.name}
            activeService={activeService}
            serviceGroup={technology.serviceGroup}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
