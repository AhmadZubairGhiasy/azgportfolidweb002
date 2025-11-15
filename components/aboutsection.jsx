import React from 'react'
import TextType from './TextType'
import Image from 'next/image'
import aboutimage from './../public/about section right align photo.png'
import {motion} from 'framer-motion'



export default function AboutSection() {
  return (
      <section id='aboutsection' className='min-h-screen w-full flex items-center justify-around lg:justify-between  px-8 md:px-20 flex-col-reverse lg:flex-row' >
          
          <div className='w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start ' >
              
               <motion.div
               initial={{opacity:0, y:20}}
               whileInView={{opacity:1, y:0}}
               transition={{duration:0.8, delay:0.2}}
               viewport={{once:false}}
               >
                 <h1 className='text-3xl my-4 '>
                     Hi, I'm a
                      <br />
                      
                      <span className='font-bold text-blue-500 uppercase text-3xl md:text-4xl '>
                           <TextType 
                            text={["Ahmad Zubiar ghiasi","Ahmad Zubiar ghiasi","Ahmad Zubiar ghiasi"]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                            />
                    </span>
                      
        </h1>
        

        <p className='text-gray-400 my-4 max-w-lg '>
          I'm Ahmad Zubair Ghiasi, a passionate frontend developer and UI/UX designer dedicated to crafting exceptional digital experiences. With a keen eye for design and a strong foundation in web development, I specialize in creating visually stunning and user-friendly websites and applications. My goal is to bridge the gap between aesthetics and functionality, ensuring that every project I undertake not only looks great but also performs seamlessly across all devices. Let's collaborate to bring your ideas to life and make a lasting impact in the digital world.
        </p>
              </motion.div>
             
        </div>

          <div className='w-1/2 flex justify-end '>
                <motion.div
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.8, delay:0.2}}
                viewport={{once:false}}
                 >
              <Image src={aboutimage} alt="About Image" width={400} height={400}  />
              </motion.div>
          </div>

        </section>
  )
}
