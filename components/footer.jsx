import React from 'react'

export default function SiteFooter() {
    const date = new Date()
  return (
      <footer className='w-full min-h-[50vh] border-box border-t border-gray-700 flex flex-col lg:flex-row  items-center justify-around lg:justify-start px-20 bg-zinc-900 '>
       
          <div className='w-full h=[90%] lg:h-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0 py-10 lg:py-0 '>
              
            <div className='w-full lg:w-1/3 text-gray-400  flex flex-col items-center lg:items-start justify-center '>
              <h1 className='text-8xl'> AZG</h1>
              <p>Designer & Developer</p>
              <p>ghiasyahmadzubair@gamil.com</p>
            </div>

            <div className='w-full lg:w-1/5 h-50 flex flex-col justify-around items-center lg:items-start  text-gray-400 '>
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/project">Project</a>
              <a href="/contact">Contact</a>
            </div>
             <div className='w-full lg:w-1/5 h-50 flex flex-col items-center lg:items-start justify-around text-gray-400 '>
              <a href="https://www.linkedin.com/in/ahmad-zubair-ghiasi-08902a26a/">Linkedin</a>
              <a href="https://www.behance.net/ahmadzghiasy">Behance</a>
              <a href="https://dribbble.com/Zwebgs">Dribble</a>
              <a href="https://github.com/AhmadZubairGhiasy">Github</a>
            </div>
         </div>

          <p className='text-center'><span className='text-xl'>©</span>{ date.getFullYear() } Ahmad Zubair Ghiasi - Designer & Developer</p>

    </footer>
  )
}
