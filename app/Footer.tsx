import React from 'react';

export default function Footer() {
  return (
    <div className='footer bg-[#fafafa] p-5  bottom-0 left-0 w-full'>
      <div className='sm:flex sm:flex-wrap justify-between items-center'>
        <div className='flex flex-wrap gap-1 items-center place-content-center'>
          <img className='w-9' src="./images/Home/Q.png" alt="" />
          <h1 className='text-2xl font-bold font-roboto bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400'>Quizzy</h1>
        </div>
        <div>
          <ul className='flex mt-8 sm:mt-0 justify-center gap-x-5'>
            <li><a href=""><img className='w-8' src="./images/Home/insta.png" alt="" /></a></li>
            <li><a href=""><img className='w-8' src="./images/Home/linkedin.png" alt="" /></a></li>
            <li><a href=""><img className='w-8' src="./images/Home/ball.png" alt="" /></a></li>
            <li><a href=""><img className='w-8' src="./images/Home/twitter.png" alt="" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
