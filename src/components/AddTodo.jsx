import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../../app/features/todo/todoSlice';

const AddTodo = () => {
    const [input, setInput] = useState(" ");
    const dispatch=useDispatch();

    const handleChange = (e)=> {
        setInput( {
            ...input,
            [e.target.name]: e.target.value, 
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <>
     <div className="flex flex-col items-center justify-center px-6 mx-auto md:h-screen lg:py-0">
     <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Notes 
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Notes"
                    
                    
                  />
                 </div> 

                 <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                 Add Todo
                </button>
       </form>           
    
    </div> 
    </>
  )
}

export default AddTodo
