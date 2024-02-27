import React, { useState,ChangeEvent,useRef } from 'react';
import Footer from './footer';

interface Question {
  id: number;
  question: string;
  imageSrc: string | null;
  fileName: string | null;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
}
export default function Quizpage() {


  const [addList, setAddList] = useState<Question[]>([{ id: 0, question: "", imageSrc: null, fileName: null, option1: "", option2: "", option3: "", option4: "" }]);
  const [formData, setFormData] = useState({
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    pic: [] as (string | null)[],
    ans: [] as string[]
  });

  const addCard = () => {
    const newId = addList.length;
    setAddList([...addList, { id: newId, question: "", imageSrc: null, fileName: null, option1: "", option2: "", option3: "", option4: "" }]);
    setFormData(prevState => ({
      ...prevState,
      pic: [...prevState.pic, null],
      ans: [...prevState.ans, ""]
    }));
  };

  const cardRemove = (index: number) => {
    const list = [...addList];
    list.splice(index, 1);
    setAddList(list);

    // Remove corresponding data from formData
    setFormData(prevState => {
      const newState = { ...prevState };
      Object.keys(newState).forEach(key => {
        if (Array.isArray(newState[key])) {
          // Create a copy of the array and filter out the removed index
          newState[key] = newState[key].filter((_, i) => i !== index);
        } else {
          // If not an array, reset the value to default (empty string)
          newState[key] = "";
        }
      });
      return newState;
    });
  };

  const handleRadioChange = (index: number, value: string) => {
    setFormData(prevState => ({
      ...prevState,
      ans: [...prevState.ans.slice(0, index), value, ...prevState.ans.slice(index + 1)] // Update the ans array at the correct index
    }));
  };

  const handleServiceChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { name, value } = e.target;
    const list = [...addList];

    // Update the list state with the new value
    list[index][name] = value;
    setAddList(list);

    // Update the formData state
    setFormData(prevState => {
      const newState = { ...prevState };
      newState[name] = Array.isArray(newState[name]) ? [...newState[name]] : [];
      newState[name][index] = value;
      return newState;
    });
  };

 const handleImageChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileName = file.name;

      // Update addList state with the file name
      const list = [...addList];
      list[index].fileName = fileName;
      setAddList(list);

      // Update formData state with the filename
      setFormData(prevState => ({
        ...prevState,
        pic: [...prevState.pic.slice(0, index), fileName, ...prevState.pic.slice(index + 1)] // Update the filename at the correct index
      }));

      // Update addList state with the imageSrc
      const reader = new FileReader();
      reader.onloadend = () => {
        const list = [...addList];
        list[index].imageSrc = reader.result as string;
        setAddList(list);
      };
      reader.readAsDataURL(file);
    }
  };


  
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(JSON.stringify(formData)); // Log the formData

    try {
      const response = await fetch('http://localhost/backend/saveData.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log(data); // Assuming PHP script returns JSON response
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
   <div>
      <form action="" onSubmit={handleSubmit}>
      <div className=' top-0 left-0 right-0 shadow-xl p-4 flex justify-between border-b-2 border-[#dbd9d9]'>
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
    <button type="submit" className="text-white bg-gray-800 mt-1 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-8 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Send</button>
    </div>
     </div>
       
 {/*  */}
 {addList.map((singleService, index) => (
 <div key={index} className='m-auto sm:w-[60%] mt-24'>
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
                    className='mx-3 w-1/2 px-1 mt-3 text-sm md:text-xl border-b-2 outline-none border-black'
                    placeholder='Untitled Question'
                    name="question"
                    value={singleService.question}
                    onChange={(e) => handleServiceChange(e, index)}
                    
                  />
                </label>
                <div>
 
                <input
            type='file'
            className='mt-5 text-sm w-1/2 text-transparent'
            onChange={(event) => handleImageChange(event, index)}
            
          />
          {singleService.imageSrc && (
            <div>
               <p className="mt-2">File Selected: {singleService.fileName}</p>
               <img src={singleService.imageSrc} alt='Uploaded' className='mt-2 w-40' />
            </div>
        
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
              
              onClick={() => cardRemove(index)}
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
            <input
      type='radio'
      name={`option${index}`} // Use a dynamic name based on the question index
      className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
      onChange={() => handleRadioChange(index, "1")} 
    />
    <input
      type='text'
      className='w-[80%] md:w-[90%] mx-3 px-1 mt-3 text-xl border-b-2 outline-none border-[#ebebeb] focus:border-black'
      placeholder='Option 1'
      name={"option1"}
      onChange={(e) => handleServiceChange(e, index)} // Use a dynamic name based on the question index
      value={addList[index].option1}
   />
  </div>
  {/* Option-2 */}
  <div>
  <input
      type='radio'
      name={`option${index}`} // Use a dynamic name based on the question index
      className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
      onChange={() => handleRadioChange(index, "2")} 
    />
    <input
      type='text'
      className='w-[80%] md:w-[90%] mx-3 px-1 mt-3 text-xl border-b-2 outline-none border-[#ebebeb] focus:border-black'
      placeholder='Option 2'
      name={"option2"}
      onChange={(e) => handleServiceChange(e, index)}// Use a dynamic name based on the question index
      value={addList[index].option2}
    />
  </div>
  {/* Option-3 */}
  <div>
  <input
      type='radio'
      name={`option${index}`} // Use a dynamic name based on the question index
      className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
      onChange={() => handleRadioChange(index, "3")} 
    />
    <input
      type='text'
      className='w-[80%] md:w-[90%] mx-3 px-1 mt-3 text-xl border-b-2 outline-none border-[#ebebeb] focus:border-black'
      placeholder='Option 3'
      name={"option3"}
      onChange={(e) => handleServiceChange(e, index)} // Use a dynamic name based on the question index
      value={addList[index].option3}
   />
  </div>
  {/* Option-4 */}
  <div>
  <input
      type='radio'
      name={`option${index}`} // Use a dynamic name based on the question index
      className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
      onChange={() => handleRadioChange(index, "4")} 
    />
    <input
      type='text'
      className='w-[80%] md:w-[90%] mx-3 px-1 mt-3 text-xl border-b-2 outline-none border-[#ebebeb] focus:border-black'
      placeholder='Option 4'
      name={"option4"}
      onChange={(e) => handleServiceChange(e, index)}// Use a dynamic name based on the question index
      value={addList[index].option4}
    />
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
    {addList.length - 1 === index && (
    <div className='text-center'>
        <button
        type='button'
      onClick={addCard}
        className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-2 me-2 mb-10 mt-4 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
      >
        Add Question
      </button>
        </div>
    )}
      </div>
    
 ))
 }
 {/*  */}
      
 </form>
    </div>
  );
}