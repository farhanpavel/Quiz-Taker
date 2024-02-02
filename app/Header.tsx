import React from 'react'

export default function Header() {
  return (
    <div>
        <div className='md:flex md:flex-wrap md:flex-row justify-between p-5 shadow-lg font-roboto font-bold '>
      <div className='flex flex-wrap items-center gap-x-3'>
      
       <img className='w-9' src="./images/Home/Q.png" alt="" />
        <h1 className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400'>Quizzy</h1>
       </div>
      <div>
      <div className='md:hidden float-right -mt-8  '>
      <button data-collapse-toggle="mobile-menu" type="button" className="md:hidden ml-3 text-black hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-2" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
       </div>
      </div>
       
      <div className='mt-4 md:mt-0' id="mobile-menu">
      <ul className='md:flex md:flex-wrap md:space-y-0 space-y-3 gap-x-10 text-gray-600 text-sm '>
        
        <li className='p-2' ><a className='p-2 hover:rounded hover:bg-[#0467FF] hover:text-white '  href="">How It Works?</a></li>
        <li className='p-2'><a className='p-2 hover:rounded hover:bg-[#0467FF] hover:text-white ' href="">Features</a></li>
        <li className='p-2'><a className='p-2 hover:rounded hover:bg-[#0467FF] hover:text-white '  href="">About us</a></li>
        <button  className='hover:bg-[#06FE8E] hover:text-white border-2 rounded-full border-[#06FE8E] px-5 py-1 text-[#06FE8E]  -mt-1'><a href="">Login</a></button>
      </ul>
      </div>
     </div>
    </div>
  )
}
