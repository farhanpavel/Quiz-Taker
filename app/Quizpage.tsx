import React, { useState,ChangeEvent } from 'react';
import Footer from './footer';

interface Question {
    id: number;
    imageSrc: string | null;
  }
export default function Quizpage() {
    const [questions, setQuestions] = useState<Question[]>([{ id: 1, imageSrc: null }]);

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
      const file: File | null = event.target.files ? event.target.files[0] : null;
      if (!file) return;
  
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedQuestions: Question[] = [...questions];
        updatedQuestions[index].imageSrc = reader.result as string;
        setQuestions(updatedQuestions);
      };
      reader.readAsDataURL(file);
    };
  
    const addQuestion = (): void => {
      setQuestions([...questions, { id: questions.length + 1, imageSrc: null }]);
    };
  
    const removeQuestion = (index: number) => {
      const updatedQuestions = questions.filter((_, i) => i !== index);
      setQuestions(updatedQuestions);
    };
  
  const renderQuestion = (question:any, index:number) => {
    return (
      <div className='m-auto sm:w-[60%] mt-5'>
        <div className='border-2 border-[#f5f0f0] bg-white p-5 space-y-2 rounded'>
          <div>
            <div className='flex justify-between'>
              <div className='md:w-screen'>
                <label htmlFor='' className='text-xl flex'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mt-6 w-6 h-6">
  <path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
</svg>


                  <input
                    type='text'
                    className='mx-3 w-1/2 px-1 mt-3 text-sm md:text-3xl border-b-2 outline-none border-black'
                    placeholder='Untitled Question'
                  />
                </label>
                <div>
                  <input
                    type='file'
                    
                    className='mt-5 text-sm w-1/2'
                    onChange={(event) => handleImageChange(event, index)}
                  />
                  {question.imageSrc && (
                    <img
                      src={question.imageSrc}
                      alt='Uploaded'
                    className='w-1/4 md:w-1/2 md:m-auto mt-5'
                    />
                  )}
                </div>
              </div>
              <div>
              <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-8 h-8 mt-2 cursor-pointer hover:text-red-600'
              onClick={() => removeQuestion(index)}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
              />
            </svg>
              </div>
            </div>
            <div>
              <div>
                <input
                
                  type='radio'
                  value=''
                  name={`default-radio-${question.id}`}
                  className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                />
                <input
                  type='text'
                  className='w-[80%] md:w-[90%] mx-3 px-1 mt-3 text-xl border-b-2 outline-none border-[#ebebeb] focus:border-black'
                  placeholder='Option 1'
                />
              </div>
             {/* Option-2 */}
             <div>
                <input
               
                  type='radio'
                  value=''
                  name={`default-radio-${question.id}`}
                  className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                />
                <input
                  type='text'
                  className='w-[80%] md:w-[90%] mx-3 px-1 mt-3 text-xl border-b-2 outline-none border-[#ebebeb] focus:border-black'
                  placeholder='Option 2'
                />
              </div>
              <div>
                <input
               
                  type='radio'
                  value=''
                 
                  className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                />
                <input
                  type='text'
                  className='w-[80%] md:w-[90%] mx-3 px-1 mt-3 text-xl border-b-2 outline-none border-[#ebebeb] focus:border-black'
                  placeholder='Option 3'
                />
              </div>
              <div>
                <input
                 
                  type='radio'
                  value=''
               
                  className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                />
                <input
                  type='text'
                  className='w-[80%] md:w-[90%] mx-3 px-1 mt-3 text-xl border-b-2 outline-none border-[#ebebeb] focus:border-black'
                  placeholder='Option 4'
                />
              </div>

            </div>
          </div>
        </div>
        <div className='footer bg-[#fafafa] p-5  bottom-0 left-0 w-full'>
      <div className='sm:flex sm:flex-wrap justify-center items-center'>
        <div className='flex flex-wrap gap-1 items-center place-content-center'>
          <img className='w-9' src="./images/Home/Q.png" alt="" />
          <h1 className='text-2xl font-bold font-roboto bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400'>Quizzy</h1>
        </div>
        
      </div>
    </div>
      </div>
    );
  };

  return (
    <div>
      
        <div className='shadow-xl p-6 flex justify-between border-b-2 border-[#dbd9d9]'>
    <div> 
    </div>
    <div>
    <ul className='flex p-2 text-md ms-7 mt-1  gap-x-11'>
    <li><a href="#" className="relative text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
Questions
</a>
</li>
<li><a href="#" className="relative text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
Responses
</a>
</li>
    </ul>
    </div>
    <div >
    <button type="button" className="text-white bg-gray-800 mt-1 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-8 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Send</button>
    </div>
     </div>
     
      {questions.map((question, index) => renderQuestion(question, index))}
      <div className='text-center'>
        <button
          type='button'
          onClick={addQuestion}
          className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-2 me-2 mb-10 mt-4 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
        >
          Add Question
        </button>
     
      </div>
           </div>
    
  );
}
