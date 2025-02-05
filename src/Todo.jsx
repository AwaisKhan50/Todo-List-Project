import React, { useState } from 'react'
import { IoMdCheckbox } from "react-icons/io";

import { MdDelete } from "react-icons/md";
const Todo = () => {

  const [inputValue, setValue] = useState('');

  // we use this state for to store data
   const [task, settask] = useState([])
  // const handlechange = (value)=>{
  //   setValue(value)
  // }

  const handler=(e)=>{
    e.preventDefault();
    console.log("submitted");
    if(!inputValue) return;
 

    if(task.includes(inputValue)) {
      setValue("");
    }
    settask((prevTask)=>[...prevTask,inputValue])
    setValue("");
  };
  const deleteTask = (index) => {
    // console.log(index);
    const newTasks = task.filter((_, i) => i !== index);
    settask(newTasks);
  };
    
  

  return (
    <>
  <section className='flex justify-center items-center w-screen h-screen bg-gradient-to-r from-blue-500 to-purple-500'>
        <div className='flex flex-col justify-center items-center p-10 bg-white rounded-lg shadow-lg'>
          <h1 className='text-blue-700 font-bold mb-5 text-3xl'>TODO List</h1>
          <form onSubmit={handler} className='flex mb-5 w-full'>
            <input
              type="text"
              value={inputValue}
              className='p-2 border border-blue-600 rounded-l w-full focus:outline-none focus:ring-2 focus:ring-blue-600 text-black'
              placeholder="Add a new task"
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            {/* <button type='submit' className='bg-blue-600 hover:bg-blue-700 text-white ml-2 p-2 rounded-r transition duration-300 ease-in-out'>ADD</button> */}
            <button
  className="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden ml-4 tracking-tighter text-white bg-gray-800 rounded-md group"
>
  <span
    className="absolute w-0 h-0 transition-all duration-500 ease-out bg-orange-600 rounded-full group-hover:w-56 group-hover:h-56"
  ></span>
  <span className="absolute bottom-0 left-0 h-full -ml-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-auto h-full opacity-100 object-stretch"
      viewBox="0 0 487 487"
    >
      <path
        fillOpacity=".1"
        fillRule="nonzero"
        fill="#FFF"
        d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
      ></path>
    </svg>
  </span>
  <span className="absolute top-0 right-0 w-12 h-full -mr-3">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="object-cover w-full h-full"
      viewBox="0 0 487 487"
    >
      <path
        fillOpacity=".1"
        fillRule="nonzero"
        fill="#FFF"
        d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
      ></path>
    </svg>
  </span>
  <span
    className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"
  ></span>
  <span className="relative text-base font-semibold">ADD TASK</span>
</button>

          </form>
          <ul className='list-none w-full flex flex-col items-center'>
            {task.map((val, index) => {
              return (
                <li key={index} className='flex text-black justify-between items-center bg-amber-400 p-2 mb-2 rounded w-3/4 border-2 border-transparent hover:border-blue-600 transition duration-300 ease-in-out'>
                  <span>{val}</span>
                  <div>
                  <button className='bg-green-500 text-white p-1 rounded hover:bg-green-700 transition duration-300 ease-in-out'><IoMdCheckbox /></button>
                  <button onClick={() => deleteTask(index)} className='bg-red-500 text-white p-1 rounded ml-1 hover:bg-red-700 transition duration-300 ease-in-out'><MdDelete /></button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

      </section>
    </>
  )
}

export default Todo