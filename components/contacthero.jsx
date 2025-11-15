import React from 'react'
import {motion} from 'framer-motion'

export default function ContactHero() {
  return (
      
       <section className="w-full min-h-screen flex flex-col justify-center items-center text-center ">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: false }}
          >
              <h2 className="text-3xl uppercase mb-4 ">
            contact
        </h2>

        <h1 className="text-5xl text-blue-500 uppercase mb-4">ahamd zubair ghiasi</h1>
        <p className='text-gray-400'>
            In this page your will get all contact info about AZG
        </p>

        <div className='m-10'>
            <a href='#formsec' className='mr-4 p-3 rounded bg-blue-500 capitalize hover:bg-blue-400' >contact me</a>
            <a href='#findme' className="p-3 rounded bg-gray-800 capitalize hover:bg-blue-400">find me</a>
            
                 </div>
          
        </motion.div>
    </section>
      
      
  )
}
