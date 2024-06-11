import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[150px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[4px] rounded-[12px] shadow-card"
      style={{
        background: 'linear-gradient(to right, #fcd5b4, #f8c471, #f7b731, #f39c12)',
      }}
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary box-[12px] py-3 px-6 min-h-[180px] md:min-h-[200px] lg:min-h-[220px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt={title}
          className='w-10 h-10 object-contain'
        />
        <h3 className='text-white text-[16px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Introduction</h2>
        <p className={styles.sectionSubText}>Overview</p>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        <p>Hello! I'm a dedicated web developer with a strong passion for creating 
          engaging and functional websites. I specialize in front-end development, 
          focusing on user experience and attentio n to detail.My goal is to craft seamless, 
          visually appealing web applications that not only meet clients' needs but also 
          provide an exceptional user experience. I’m committed to learning and staying up-to-date
          with the latest industry trendsto continuously improve my skills and deliver high-quality solutions.</p>
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10  sm:grid[grid grid-cols-2]'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
