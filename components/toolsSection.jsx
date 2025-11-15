import React from 'react'


import {motion} from 'framer-motion'

import {
    SiAdobephotoshop, SiAdobeillustrator, SiAdobeindesign, SiAdobexd, SiFigma
    ,SiNodedotjs,
    SiSketch,
    SiMiro,
    SiNextdotjs,
    SiTailwindcss,
    SiExpress,
    SiDjango,
    SiMysql,
    SiPostgresql,
    SiSqlite,
    SiMongodb
} from "react-icons/si"

import { FaPencilRuler,FaCode,FaDatabase, FaHtml5, FaReact, } from 'react-icons/fa';


export default function ToolSection() {
    const sections = [
        {
            id: 'graphic',
            Icon: FaPencilRuler ,
            title: 'Graphic Design',
            items: [{ name: 'Adobe Photoshop', icon: SiAdobephotoshop },
                { name: 'Adobe Illustrator', icon: SiAdobeillustrator },
                {name:"Adobe InDesign", icon: SiAdobeindesign }]
        },
        {
            id: 'uiux',
            Icon: FaPencilRuler,
            title: 'UI / UX Design',
            items: [{name:'Figma',icon:SiFigma}, {name:'Sketch',icon:SiSketch}, {name:'Adobe XD',icon:SiAdobexd}, {name:'Miro',icon:SiMiro}]
        },
        {
            id: 'frontdev',
            Icon: FaCode,
            title: 'Frontend Development',
            items: [{name:'html/css',icon:FaHtml5},{name:'React',icon:FaReact}, {name:'Next.js',icon:SiNextdotjs}, {name:'Tailwind CSS',icon:SiTailwindcss}],
        },
         {
            id: 'backdev',
            Icon: FaCode,
            title: 'backend Development',
            items: [{name:'nodejs',icon:SiNodedotjs}, {name:'expressjs',icon:SiExpress},{name:'django',icon:SiDjango}]
        },
       {
            id: 'database',
            Icon: FaDatabase,
            title: 'Database Management',
            items: [{name:'my SQL',icon:SiMysql}, {name:'Postgres SQL',icon:SiPostgresql},{name:'SQLite',icon:SiSqlite},{name:'mongodb',icon:SiMongodb}]
        }
         
    ]

      

        return (
            <section className='w-full min-h-screen py-40 flex flex-col items-center justify-center px-10 md:px-20 box-border bg-zinc-900' >
                <motion.h1
                    className='text-3xl text-blue-500 font-bold text-center'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{duration:0.8, delay:0.2}}
                    viewport={{once:false}}
                >
                    Tools & Technologies Section
                </motion.h1>


                <div className='w-full flex flex-wrap mt-10 flex  gap-8 ' >
                    {sections.map((s,index) =>
                        <>
                            <motion.div
                                className='w-70 h-60 rounded flex box-border bg-zinc-800 items-center justify-center flex-col p-4 gap-4 hover:scale-105 transition-transform duration-300 '
                                key={s.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.2+index*0.2 }}
                                viewport={{ once: false }}
                            >
                                <div className='w-65 h-50 rounded flex box-border bg-zinc-800 items-center justify-start flex-col p-4 gap-4 hover:scale-105 transition-transform duration-300 ' key={s.id} >
                                <div className='flex flex-row'><s.Icon size={20} color='#00ccffff' />
                                <h2 className='px-4 capitalize'>{s.title}</h2></div>
                                
                                <div className='w-full'>
                                    {s.items.map((t) =>
                                        <>
                                            <div className='flex flex-row my-2'>
                                                <t.icon size={20} color='#888888'/>
                                                <p className='text-gray-400 px-4 capitalize'>{t.name}</p>
                                            </div>
                                        </>)
                                    }

                                </div>
                            </div>
                                </motion.div>
                        
                        </>
                    
                    )
                    
                    
                    }
                    
                </div>
                
            </section>
        )
}
