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
       I am a UI/UX Designer, Full-Stack Web Developer, DevOps Engineer, and Database Manager with a strong passion for building complete digital products from idea to deployment. I specialize in designing user-centered interfaces, developing scalable web applications, and managing reliable backend systems and infrastructure.

With experience in modern technologies such as React, Node.js, Laravel, and database systems, I focus on creating seamless user experiences backed by efficient and secure system architecture. I also work with DevOps practices including CI/CD pipelines, Docker, Git, and cloud deployment, ensuring fast and stable delivery of applications.

My approach combines design thinking, software engineering, and system optimization, allowing me to bridge the gap between design, development, and operations. I enjoy solving real-world problems, improving system performance, and building products that are both visually engaging and technically strong.

I am continuously learning and evolving in areas such as cloud computing, system design, and modern UI/UX trends, aiming to deliver high-quality digital solutions that are user-friendly, scalable, and production-ready.

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
