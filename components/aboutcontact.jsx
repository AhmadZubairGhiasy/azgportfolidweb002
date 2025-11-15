import React from 'react'
import { motion } from 'framer-motion'

import Image from 'next/image'
import img from './../public/contact section photo.png'

import { SiBehance, SiFacebook, SiGithub, SiGmail, SiInstagram, SiLinkedin, SiWhatsapp, SiYoutube } from 'react-icons/si'
import { FaPhone, FaPhoneAlt } from 'react-icons/fa'


export default function AboutContact() {
    const contact = [
        { method: 'Email', detail: 'ghiasyahmadzubair@gmail.com', icon: SiGmail },
        { method: 'Phone', detail: '+93795729093', icon: FaPhoneAlt },
        {method:'whatsapp', detail:'+93795729093', icon:SiWhatsapp }
    ]

    const socials = [
        { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/ahmad-zubair-ghiasi-08902a26a/', icon: SiLinkedin },
        { platform: 'facebook', url: 'https://www.facebook.com/AZubair.gs.1', icon: SiFacebook },
        { platform: 'instagram', url: 'https://www.instagram.com/ahmadzubairghiasy/', icon: SiInstagram },
        { platform: 'behance', url: 'https://www.behance.net/ahmadzghiasy', icon: SiBehance },
        { platform: 'github', url: 'https://github.com/AhmadZubairGhiasy', icon: SiGithub },
    ]

  return (
      <section className='w-full min-h-screen flex items-center  overflow-hidden px-20  '>
          
          <div className='w-full lg:w-1/2 h-full flex flex-col items-start justify-center lg:px-20'>
              <motion.div
                  
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: false }}
              >
                  
                  <h1 className='text-2xl uppercase '>contact <span className='text-blue-500'>details</span></h1>
                  
                  <div className='mt-10'>
                      
                      {
                          contact.map((c) => <>
                              <div className='flex flex-row items-center my-4'>
                                  <c.icon size={20} color='#006effff' />
                                    <p className='px-4 text-gray-400'>{c.detail}</p>
                                </div>
                          </>)
                      }

                    </div>


              </motion.div>
              
            
              <motion.div
                  
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: false }}
              >
                  <h1 className='text-2xl uppercase mt-20 '>social <span className='text-blue-500'>links</span></h1>  
                  
                  <div className='flex w-full flex-wrap my-8'>
                      {
                          socials.map((s,index) => <>
                              <motion.a
                                  className='hover:scale-110 transition-transform duration-300 m-4 '
                      href={s.url}
                      initial={{ opacity: 0}}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.2 }}
                      viewport={{ once: false }}
                                  >
                                
                                  <s.icon size={30} color='#ffffffff' />
                                  </motion.a>
                          </>)}
                  </div>
              </motion.div>
          
          </div>

          

          <div className='w-1/2 h-full hidden lg:flex items-center justify-end pl-20 '>
                
              <motion.div
                  className=' relative '
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: false }}
              >
                  <Image src={img} alt='contact image' />
              </motion.div>
          
          </div>
          
    </section>
  )
}
