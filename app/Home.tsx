import React from 'react';

const Home = () => {
  return (
    <div>
     
     <div className='md:flex md:flex-wrap md:flex-row justify-between p-5 shadow-lg font-roboto font-bold '>
      <div className='flex flex-wrap gap-x-3'>
      
       <img className='w-9' src="./images/Home/Q.png" alt="" />
        <h1 className='text-2xl font-extralight'>Quizzy</h1>
       </div>
      <div>
      <div className='md:hidden float-right -mt-8 border-2 border-black opacity-90 shadow-lg rounded'>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 ">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
      </svg>
       </div>
      </div>
       
      <div className='mt-4 md:mt-0'>
      <ul className='md:flex md:flex-wrap md:space-y-0 space-y-3 gap-x-10 text-gray-600 text-sm '>
        <li className='hover:bg-[#0467FF] p-2 hover:text-white hover:rounded'><a href="">How It Works?</a></li>
        <li  className='hover:bg-[#0467FF] p-2 hover:text-white  hover:rounded'><a href="">Features</a></li>
        <li  className='hover:bg-[#0467FF] p-2 hover:text-white  hover:rounded'><a href="">About us</a></li>
        <button  className='hover:bg-[#06FE8E] hover:text-white border-2 rounded-full border-[#06FE8E] px-5 py-1 text-[#06FE8E]  -mt-1'><a href="">Login</a></button>
      </ul>
      </div>
     </div>
    <div className='container mx-auto'>
      <div className='flex flex-wrap justify-around'>
        <div className='m-auto '>
        <h1 className='lg:text-4xl mt-3 text-lg sm:text-2xl md:text-3xl w-3/4 bg-clip-text  text-transparent bg-gradient-to-r from-[#0178ff] to-[#49CDFF]'>Learn new concepts each minute</h1>
        <div className='border-l-4 border-[#01FF88] '>
        <p className='mt-5 text-md  md:text-md  mx-2 text-[#828282]'>We help you prepare for exams and quizes </p>
        
        
        </div>
        <div className='mt-4 space-x-4 lg:space-x-2'>
        <button className="border-1 bg-gradient-to-r rounded-full from-blue-500 to-blue-300 text-white lg:px-4 lg:py-1 py-1 px-2 "><a href="#" className="text-white p-1 ">Sign In</a>
</button>

    <button className="border-1 bg-gradient-to-r from-blue-500 to-blue-300 text-white lg:px-4 lg:py-1 py-1 px-2  rounded-full"><a href="#" className="text-white p-1">Sign Up</a>
    </button>

        </div>
        </div>
        <div className='order-first xl:order-last'>
      <img src="./images/Home/Background.png" className='w-4/5 ms-5' alt="" />
        </div>
      </div>
    </div>
    <div>
      <div >
        <img src="./images/Home/one.png" className='w-1/4' alt="" />
        <div className=' m-auto'>
        <h1 className='text-center  p-2 text-3xl text-[#333333] font-bold '>
      Quizzy comes with<br/>
      amazing <span className='text-[#08FE90]'>features </span>like:</h1>
   
        </div>
      </div>
      <div>
        <div className='flex flex-wrap justify-around gap-x-4 mt-8'>
        <div className='md:w-1/4 sm:w-1/2 w-4/6 cursor-pointer shadow-xl p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
        <img src="./images/Home/Group 23.png" className='m-auto' alt="" />
        <h1 className='text-center text-xl font-bold'>3D Coverage</h1>
        <p>3 dimensional coverage of all questions related to a perticular topic</p>
        </div>
        <div  className='md:w-1/4 sm:w-1/2 w-4/6  cursor-pointer shadow-xl p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
        <img src="./images/Home/Group 24.png" className='m-auto' alt="" />
        <h1 className='text-center text-xl font-bold'>Plenty of subjects</h1>
        <p>3 dimensional coverage of all questions related to a perticular topic</p>
        </div>
        <div  className='md:w-1/4 sm:w-1/2 w-4/6   cursor-pointer shadow-xl p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
        <img src="./images/Home/Group 25.png" className='m-auto' alt="" />
        <h1 className='text-center text-xl font-bold'>Detailed solutions</h1>
        <p className='mb-2'>3 dimensional coverage of all questions related to a perticular topic</p>
        </div>
        </div>
        <div>
          <img src="./images/Home/two.png" className='w-1/5 float-right' alt="" />
        </div>
      </div>
    </div>
</div>


    
  );
};

export default Home;