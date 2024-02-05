import React from 'react'
import Header from "../app/header.tsx"
import Footer from "../app/footer.tsx"
export default function Quizbody() {
  return (
    <div>
    <Header/>
    <div>
      <div className='w-[80%] h-[70vh] shadow m-auto mt-14'>
      <div className="grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 s grid-flow-col gap-4 mx-5 ">
    <div className="row-span-11 border-2 border-gray-400  rounded-lg mt-5 transform  transition duration-300 hover:scale-105 cursor-pointer">
   <div >
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="m-auto mt-11 w-6 h-6  text-gray-500">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
    <p className='text-sm text-center text-gray-500 font-semibold'>Create New Quiz</p>
   </div>
  </div>
</div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}
