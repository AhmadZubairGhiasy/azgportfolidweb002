import React from 'react'
import { motion } from 'framer-motion'
import TextType from './TextType';
import Image from 'next/image';
import imge from './../public/about page photo (2).png'

export default function AboutHero() {
  return (
      <section className='w-full min-h-[100vh] flex items-center justify-center text-center lg:text-start lg:items-center z-0' >
          
          
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{opacity:1, y:0}}
                transition={{duration:0.8, delay:0.2}}
                viewport={{once:true}}
          
          >
          
          
            
            <h1 className='w-full text-3xl text-center my-4 capitalize'>
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
              <div className='mt-5 flex flex-wrap items-center justify-center  '>
            <a href="#aboutsection" className='m-2 p-3 rounded bg-blue-500 capitalize hover:bg-blue-400' >Know More</a>
            <a href='/project' className="m-2 p-3 rounded bg-gray-800 capitalize hover:bg-blue-400">See Project</a>
            
                 </div>
          
          </motion.div> 
          
          


      
          
    </section>
  )
}

