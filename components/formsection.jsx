import React, { useState } from 'react'
import { motion } from 'framer-motion';

import { useForm, ValidationError } from '@formspree/react';

export default function FormSection() {

    const [showmessage, setshowmessage] = useState(false)

    const [state, handleSubmit] = useForm("xkgwnwob");

    const checkstate = () => {
        if (state.succeeded) {
            setshowmessage(true)
        }
    }
    
    

  return (
      <section id='formsec' className='w-full min-h-screen flex items-center justify-evenly flex-col'>
         <motion.div
          initial={{opacity:0, y:30}}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            viewport={{once:false}}>
              
              <h1 className='text-3xl uppercase'>message <span className='text-blue-500'>AZG</span></h1>
          </motion.div>

          

          {!showmessage ?  <motion.div
          initial={{opacity:0, y:30}}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay:0.2 }}
              viewport={{ once: false }}>
              
             <form onSubmit={handleSubmit} className='w-80 lg:w-100 flex flex-col'>
    
                <input className='my-2 p-4 placeholder:capitalize border-1 border-gray-500 rounded' id="name" type="name"  name="name" placeholder='name' />
                <ValidationError prefix="name" field="name" errors={state.errors} />
      <input className='my-2 p-4 placeholder:capitalize border-1 border-gray-500 rounded' id="email" type="email" name="email" placeholder='email' />
      <ValidationError  prefix="Email"  field="email" errors={state.errors} />
      <textarea className='my-2 p-4 h-30 placeholder:capitalize border-1 border-gray-500 rounded' id="message" name="message" placeholder='message' />
      <ValidationError  prefix="Message"  field="message" errors={state.errors}/>
      <button onClick={checkstate} type="submit" disabled={state.submitting} className='my-2 px- py-4 uppercase bg-blue-600 hover:bg-blue-500 rounded'> send message</button>
    </form>
          </motion.div> :
              <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
          
          >Thanks for contacting use. Your message has been sent</motion.p>}

          
          
    </section>
  )
}
