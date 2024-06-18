import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import imesh from '../assets/imesh.jpg'; // Ensure to place your image in the correct path

const Contact = () => {
  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <h4 className={styles.sectionHeadText} style={{ wordSpacing: '0.5rem' }}>Get in touch</h4>
        <p className={styles.sectionSubText}>My Contacts</p>

        <div className='mt-12 flex flex-col gap-4'>
        <div className='flex justify-center'>
          <img src={imesh} alt='My Image' className='w-40 h-40 rounded-full object-cover' />
        </div>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Phone Number</span>
            <p className='bg-tertiary py-4 px-6 text-white rounded-lg font-medium'>+94 77 559 7326</p>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Email</span>
            <p className='bg-tertiary py-4 px-6 text-white rounded-lg font-medium'>imeshrupasinghe50@gmail.com</p>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Location</span>
            <p className='bg-tertiary py-4 px-6 text-white rounded-lg font-medium'>Colombo, Sri Lanka</p>
          </label>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
