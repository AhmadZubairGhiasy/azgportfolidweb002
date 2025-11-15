"use client";

import 
{ useState } from "react"




export default function NavBar() {
    
  const [show, setshow] = useState(false)


  const showCon = () => { 
    setshow(!show)
  }
  
  return (
    
    <nav
      className="
      w-full
      h-16
      flex
      items-center
      justify-between
      p-4
      box-border
      absolute
      top-0
      left-0
      z-20
      
      bg-opacity-80
      backdrop-blur-md
      absolute
      px-8
      
      md:px-10
      lg:px-20
      

      " >
          <div className="text-white bold uppercase text-2xl font-bold tracking-widest">AZG</div>
          <div className="hidden lg:inline">
              <a href="/"     className="mx-4 text-white opacity-100 hover:text-blue-300">Home</a>
              <a href="/about"    className="mx-4 text-white opacity-100 hover:text-blue-300">About</a>
              <a href="/project" className="mx-4 text-white opacity-100 hover:text-blue-300">Projects</a>
              <a href="contact"  className="mx-4 text-white opacity-100 hover:text-blue-300">Contact</a>
              
      </div>

        <button onClick={()=>{"use client"; showCon()}} className="rotate-90 block lg:hidden text-white tracking-widest text-xl font-bold">|||</button>
      
         <div className={`${show==false?"hidden":"block"} absolute h-50 w-40 bg-gray-900 bg-opacity-20 flex flex-col items-center justify-around top-20 right-8`}>
              <a href="/"     className="mx-4 text-white opacity-100 hover:text-blue-300">Home</a>
              <a href="/about"    className="mx-4 text-white opacity-100 hover:text-blue-300">About</a>
              <a href="/project" className="mx-4 text-white opacity-100 hover:text-blue-300">Projects</a>
              <a href="contact"  className="mx-4 text-white opacity-100 hover:text-blue-300">Contact</a>
              
            </div>

      
      </nav>
  )
}
