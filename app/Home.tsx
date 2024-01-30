// src/components/Home.js

import React from 'react';

const Home = () => {
  return (
    <>
    
    <div className="grid grid-cols-2 gap-6">
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
                          src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
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

                {/* </div> */}
            
                <div className=''>
                    <div>
                        <p className='text-3xl'> About Us </p> <br />
                        <p className='text-6xl font-bold'>A House Of Creative & Intelligent</p> <br/>
                        <p className='text-3xl'>In social Science is defined as the capacity of individuals to act independtly and to influence (such as social class,religion,grnder,ethnicity,ability,custom,etc.) that derermine or limit.</p>
                    </div>
                    <br/>
                    <div className="flex flex-wrap">
                        <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Our Team</button>
                        <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Learn more</button>
                    </div>
                </div>
  
              </div>
    <br />
          <p className='text-4xl'>Let's checkout your <br />
<span className='text-blue-600'>learning</span> journey</p>
    <div  className="flex flex-row gap-x-10">
  <div className="basis-1/3"><div className="flex flex-col ...">
  <div className='w-1/2'>
    <img src="/public/images/Home/Group 13.png" alt="" />
    <p className='text-2xl font-semibold'>Choose your subject</p>
    <p>Choose your favourite subject
from the vast selection of subjects
and continnue your journey</p>

  </div>
  <div>
  <img  src="/public/images/Home/Group 15.png" alt="" />
    <p className='text-2xl font-semibold'>Increasing difficulty</p>
    <p>Difficulty of questions will increase for the upcoming question irrespective of result of a previous question</p>
  </div>
</div></div>
  <div className="basis-1/3"><div className="flex flex-col ...">
  <div>
  <img src="/public/images/Home/Group 14.png" alt="" />
    <p className='text-2xl font-semibold'>Select the difficulty</p>
    <p>Select difficulty of your choice
and get the difficulty of questions
according to your difficulty</p>
  </div>
  <div><img src="/public/images/Home/Group 16.png" alt="" />
    <p className='text-2xl font-semibold'>Detailed overview of scores</p>
    <p>Get the detailed overview of
your question answer session
and tips on how you can improve</p></div>
</div></div>
  <div className="basis-1/3"><div className="flex flex-col relative">
  <div >
  <img className='w-24' src="/public/images/Home/Group 26.png" alt="" />
  </div>
  <div><img className='w-24' src="/public/images/Home/Group 27.png" alt="" /></div>
  <div><img className='w-24' src="/public/images/Home/Group 28.png" alt="" /></div>
  <div ><img className='w-24' src="/public/images/Home/Group 29.png" alt="" /></div>
</div></div>
</div>
    
    
    </>

            

  );
};

export default Home;
