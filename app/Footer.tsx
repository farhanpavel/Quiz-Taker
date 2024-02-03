import React from 'react'

export default function Footer() {
  return (
    <div>
       <div className='sm:flex sm:flex-wrap p-5 sm:justify-between  bg-[#fafafa]'>
      <div className='flex flex-wrap gap-1 items-center place-content-center'>
      <img className='w-9' src="./images/Home/Q.png" alt="" />
      <h1 className='text-2xl font-bold font-roboto bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400'>Quizzy</h1>
      </div>
      <div >
        <ul  className='flex flex-wrap mt-8 sm:mt-0 place-content-center gap-x-5'> 
          <li><a href=""><img className='w-8' src="./images/Home/insta.png" alt="" /></a></li>
          <li><a href=""><img className='w-8' src="./images/Home/linkedin.png" alt="" /></a></li>
          <li><a href=""><img className='w-8' src="./images/Home/ball.png" alt="" /></a></li>
          <li><a href=""><img className='w-8' src="./images/Home/twitter.png" alt="" /></a></li>
        </ul>
      </div>
     
    </div>
    </div>
  )
}
