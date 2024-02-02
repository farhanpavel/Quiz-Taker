import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div>
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
    <div className='container mx-auto'>
      <div className='flex flex-wrap justify-around'>
        <div className='m-auto '>
        <h1 className='font-semibold lg:text-4xl mt-3 text-lg sm:text-2xl md:text-3xl w-3/4 bg-clip-text  text-transparent bg-gradient-to-r from-[#0178ff] to-[#49CDFF]'>Learn new concepts each minute</h1>
        <div className='border-l-4 border-[#01FF88] '>
        <p className='mt-5 text-md  md:text-md  mx-2 text-[#828282]'>We help you prepare for exams and quizes </p>
        
        
        </div>
        <div className='mt-4 space-x-4 lg:space-x-2'>
        <button
  className="border-2 bg-gradient-to-r rounded-full from-blue-500 to-blue-300 text-white lg:px-4 lg:py-2 py-1 px-3 focus:outline-none transform transition-transform hover:scale-105">
    <Link to="/signin"  className="text-white p-2 font-semibold">Sign in</Link>
 
</button>

<button
  className="border-2 bg-gradient-to-r from-blue-500 to-blue-300 text-white lg:px-4 lg:py-2 py-1 px-3 rounded-full focus:outline-none transform transition-transform hover:scale-105"
>
<Link to="/signup"  className="text-white p-2 font-semibold">Sign up</Link>
 
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

    <div className='container mx-auto'>
<div className="grid grid-cols-2 gap-6 mt-56 ">
                <div className="grid grid-cols-2 w-3/4 mx-4 gap-6">
                {/* <p className='text-3xl'>In social Science is defined as the capacity of individuals to act independtly and to influence (such as social class,religion,grnder,ethnicity,ability,custom,etc.) that derermine or limit.</p> */}
              
                  {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-6"> */}
                    <div className="grid gap-6">
                      <div>
                        <img
                          className="h-60 max-w-full rounded-lg object-cover object-center"
                          src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                          alt="gallery-photo"
                        />
                      </div>
                      <div>
                        <img
                          className="h-96 max-w-full rounded-lg object-cover object-center "
                          src="./images/Home/pavel.jpg"
                          alt="gallery-photo"
                        />
                      </div>
                      
                    </div>
                    <div className="grid gap-6">
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg object-cover object-center"
                          src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                          alt="gallery-photo"
                        />
                      </div>
                      <div>
                        <img
                          className="h-40 max-w-full rounded-lg object-cover object-center"
                          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                          alt="gallery-photo"
                        />
                      </div>
                      
                    </div>
                    
                  </div>

              
            
                <div className=''>
                    <div>
                       
                        <p className='md:text-6xl font-bold bg-clip-text  text-transparent bg-gradient-to-r from-[#01FF88] to-[#56CCF2] py-3 -ms-1'>A House Of Creative & Intelligent</p> <br/>
                        <p className='md:text-xl'>In social Science is defined as the capacity of individuals to act independtly and to influence  that derermine or limit.</p>
                    </div>
                    <br/>
                  
                </div>
  
              </div>
    
</div>
    <br />
    <div className='mt-32 '>
    <p className='text-4xl text-center mb-16 font-bold'>Let's checkout your <br />
<span className='bg-clip-text  text-transparent bg-gradient-to-r from-[#0178ff] to-[#49CDFF]'>learning</span> journey</p>
    <div className='flex flex-wrap justify-around'>
      <div className='md:w-1/4 sm:1/2'>
      <div  >
      <img src="./images/Home/Group 13.png" alt="" />
      <h1>Hello word</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia eveniet eius veritatis doloremque veniam sunt nesciunt sit sed excepturi nemo.</p>
      </div>
      <div  >
      <img src="./images/Home/Group 14.png" alt="" />
      <h1>Hello word</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia eveniet eius veritatis doloremque veniam sunt nesciunt sit sed excepturi nemo.</p>
      </div>
      </div>
      <div className=' md:w-1/4 sm:1/2 '>
      <div>
      <img src="./images/Home/Group 15.png" alt="" />
      <h1>Hello word</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia eveniet eius veritatis doloremque veniam sunt nesciunt sit sed excepturi nemo.</p>
      </div>
      <div >
      <img src="./images/Home/Group 16.png" alt="" />
      <h1>Hello word</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia eveniet eius veritatis doloremque veniam sunt nesciunt sit sed excepturi nemo.</p>
      </div>
      
      </div>
     
      <div className='w-1/4 ms-32 mt-8 md:block hidden'>
      <div><img className='w-24 relative right-20' src="./images/Home/Group 26.png" alt="" /></div>
      <div><img className='w-24  relative left-20' src="./images/Home/Group 27.png" alt="" /></div>
      <div><img className='w-24  relative right-20' src="./images/Home/Group 28.png" alt="" /></div>
      <div><img className='w-24  relative left-20' src="./images/Home/Group 29.png" alt="" /></div>
      </div>
    </div>
    
    
    </div>
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


    </div>
  )
}
