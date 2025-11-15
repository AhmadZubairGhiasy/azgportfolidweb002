import React from 'react'


import {motion} from 'framer-motion'


import { FaPencilRuler,FaCode,FaDatabase, FaHtml5, FaReact, } from 'react-icons/fa';


export default function ProjectSection() {
    const sections = [
        {
            id: 'graphic',
            Icon: FaPencilRuler ,
            title: 'Graphic Design projects',
            url:'https://www.behance.net/ahmadzghiasy1'
        },
        {
            id: 'uiux',
            Icon: FaPencilRuler,
            title: 'UI / UX Design',
            url:'https://www.behance.net/ahmadzghiasy'
        },
        {
            id: 'frontdev',
            Icon: FaCode,
            title: 'Frontend Development',
            url:'https://github.com/AhmadZubairGhiasy'
        },
         {
            id: 'backdev',
            Icon: FaCode,
            title: 'backend Development',
            url:'https://github.com/AhmadZubairGhiasy'
        },
       {
            id: 'database',
            Icon: FaDatabase,
            title: 'Database Management',
            url:'https://github.com/AhmadZubairGhiasy'
        }
         
    ]

      

        return (
            <section className='w-full min-h-screen py-40 flex flex-col items-center justify-center px-10 md:px-20 '>
                <motion.h1
                    className='text-3xl mb-20 text-blue-500 font-bold'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{duration:0.8, delay:0.2}}
                    viewport={{once:false}}
                >
                    Projects & Portfolio
                </motion.h1>


                <div className='w-full flex flex-wrap mt-10 flex  gap-8 ' >
                    {sections.map((s,index) =>
                        <>
                            <motion.div
                                className='w-70 h-40 rounded flex box-border bg-zinc-800 items-center justify-center flex-col p-4 gap-4 hover:scale-105 transition-transform duration-300 '
                                key={s.id}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.2+index*0.2 }}
                                viewport={{ once: false }}
                            >
                                <div className='w-65 h-50 rounded flex box-border bg-zinc-800 items-center justify-start flex-col p-4 gap-4 hover:scale-105 transition-transform duration-300 ' key={s.id} >
                                <div className='flex flex-row'><s.Icon size={20} color='#00ccffff' />
                                <h2 className='px-4 capitalize'>{s.title}</h2></div>

                                <a href={s.url} className=' px-4 py-2 capitalize rounded-xl bg-blue-500'>visit projects</a>

                            </div>
                                </motion.div>
                        
                        </>
                    
                    )
                    
                    
                    }
                    
                </div>
                
            </section>
        )
}
