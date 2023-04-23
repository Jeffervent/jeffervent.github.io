import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion';

import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon}) =>{
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly item-center flex-col"
        >
          <img src={icon} alt={title}
          className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>

        </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionHeadText}>About Me</p>
    </motion.div>

    <motion.p
      variants={fadeIn("","",0.1,1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I am a student at Massey University going into the Screen Arts with honours, with a focus of Immersive Media. I have experience with Vr development in Unity, and am working on refining those skills as well in that workspace, and in other workspaces such as UE5. I am also efficient at making 3d models in blender and know how to both model and texture, and know how to bake those textures so the models can be exported into other projects. I think Vr/Ar has great potential to become a new dominant way of story telling that has an emphasis on user interaction in a way that other media has not been able to do in the past, and I am very excited to learn more about how I can implement my creative visions in the future
    </motion.p>

    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) =>(<ServiceCard key={service.title} index={index} {...service}/> ))}

    </div>
    </>
  )
}

export default SectionWrapper (About, "about")
