import React from 'react'
import { motion } from 'framer-motion'
import TextType from './TextType';
import Image from 'next/image';
import imge from './../public/about page photo (2).png'

export default function AboutHero() {
  return (
      <section className='w-full h-screen flex overflow-hidden items-center text-center lg:text-start lg:items-start z-0' >
          
          <div className='w-full lg:w-1/2 h-full flex flex-col items-center lg:items-start justify-center px-20 '>
          
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{opacity:1, y:0}}
                transition={{duration:0.8, delay:0.2}}
                viewport={{once:true}}
          
          >
          
          
            
            <h1 className='text-3xl my-4 capitalize'>
                    know more 
                      <br />
                      
                      <span className='font-light text-blue-500 uppercase text-5xl '>
                           <TextType 
                            text={["Ahmad Zubair Ghaisi","Ahmad Zubair Ghaisi","Ahmad Zubair Ghaisi"]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                            />
                    </span>
                      
            </h1>
                <p>In this page your will get all info you need to know about AZG</p>
              <div className='mt-5 flex flex-wrap items-center justify-center lg:justify-start '>
            <a href="#aboutsection" className='m-2 p-3 rounded bg-blue-500 capitalize hover:bg-blue-400' >Know More</a>
            <a href='/project' className="m-2 p-3 rounded bg-gray-800 capitalize hover:bg-blue-400">See Project</a>
            
                 </div>
          
          </motion.div> 
          
          </div>



          <div className='w-1/2 h-full hidden lg:flex items-center justify-center px-20 '>
              <motion.div
          initial={{opacity:0, x:100}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:0.5, delay:0}}
          viewport={{once:true}}
        >
                  <div className='w-full h-full'>
                      <Image src={imge} alt="about page image"/>
              </div>
              </motion.div>
              
          </div>
          
    </section>
  )
}

