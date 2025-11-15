import React from 'react'
import { motion } from 'framer-motion'

import { SiBehance, SiDribbble, SiFacebook, SiGithub, SiGmail, SiInstagram, SiLinkedin, SiPhonepe, SiTelegram, SiWhatsapp } from "react-icons/si"
import { FaPhoneAlt } from 'react-icons/fa';


export default function ContactSection() {
    const contacts = [
        { link:'mailto:ghiasyahmadzubir@gmail.com',icon:SiGmail },
        { link:"tel:+9379-572-9093",icon:FaPhoneAlt },
        { link:'https://www.linkedin.com/in/ahmad-zubair-ghiasi-08902a26a/',icon:SiLinkedin },
        { link:'https://github.com/AhmadZubairGhiasy',icon:SiGithub },
        { link:'https://wa.me/+93795729093',icon:SiWhatsapp },
        { link:'https://www.facebook.com/AZubair.gs.1',icon:SiFacebook},
        { link:'https://www.instagram.com/ahmadzubairghiasy/',icon:SiInstagram},
        { link:'https://t.me/azg1382',icon:SiTelegram},
        { link:'https://www.behance.net/ahmadzghiasy',icon:SiBehance},
        { link:'https://dribbble.com/Zwebgs',icon:SiDribbble},
        
    ];


  return (
      <section id='findme' className='w-full min-h-screen py-40 flex flex-col items-center justify-center px-20 '>
          <motion.h1
              className='text-3xl text-blue-500 font-bold'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
          >
                Find Me
          </motion.h1> 
          
          <div className='w-full flex flex-row mt-10 gap-8 items-center justify-center flex-wrap ' >
              
              {contacts.map((c, index) => <>
                  <motion.a
                      className='hover:scale-110 transition-transform duration-300 '
                      href={c.link}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.2 }}
                      viewport={{ once: false }}
                  >
                     
                      
                      <c.icon size={30} color='#ffffffff' />
                                           
                    </motion.a>
              </>)}

        </div>


    </section>
  )
}
