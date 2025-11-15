import React from 'react'
import DotGrid from './DotGrid'
import TextType from './TextType'
import Image from 'next/image'
import imge from './../public/20250407_201118-Recovered.png'

import {motion} from 'framer-motion'


export default function HeroSection() {
  return (
      <section className='relative w-full h-screen flex overflow-hidden' >
          
          
          <div className='z-0 w-full h-screen absolute' >
        <DotGrid
          dotSize={5}
    gap={15}
    baseColor="#01227d"
    activeColor="#0099ff"
    proximity={120}
    shockRadius={250}
    shockStrength={5}
    resistance={750}
    returnDuration={1.5}
              />
              
    
          </div>
          
            
          

          <section className='text-white w-full z-10 px-8 md:px-20 lg:px-20 my-auto flex  justify-between items-center text-center lg:text-left flex-col-reverse lg:flex-row ' >
               
              
              
              <div >
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{opacity:1, y:0}}
                transition={{duration:0.8, delay:0.2}}
                viewport={{once:false}}
          
          >
          
            
             <h1 className='capitalize text-3xl' >
                      Hi, my name is <br /> <span className='font-semibold text-blue-500 uppercase'>
                    Ahmad Zubair Ghiasi
                  </span>
            </h1>
            
            <h1 className='text-3xl my-4'>
                      I'm a
                      <br />
                      
                      <span className='font-light text-blue-500 uppercase text-5xl '>
                           <TextType 
                            text={["graphic designer", "ui/ux designer", "frontend developer", "node js developer"]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={false}
                            cursorCharacter="|"
                            />
                    </span>
                      
            </h1>
            
              <div className='mt-5'>
              <a href="#findme"    className='mr-4 p-3 rounded bg-blue-500 capitalize hover:bg-blue-400' >Hire now</a>
            <a href='/contact' className="p-3 rounded bg-gray-800 capitalize hover:bg-blue-400">contact now</a>
            
                 </div>
          
          </motion.div> 
              </div>
              

        <motion.div
          initial={{opacity:0, x:100}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:0.5, delay:0}}
          viewport={{once:false}}
        >
          <div className="hidden md:block scale-75 lg:scale-100" >
                <Image src={imge} alt="Hero Image" width={400} height={400}  />
              </div>
         </motion.div>

         </section>

        
          </section>
  )
}
