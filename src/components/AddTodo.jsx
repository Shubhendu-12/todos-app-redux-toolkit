import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../app/features/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState(" ");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center px-6 mx-auto md:h-screen lg:py-0">
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <div className="">
            <label
              htmlFor="name"
              className=" flex  mb-2 text-sm font-medium text-gray-900 dark:text-white items-center justify-center "
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
          <div className="flex items-center justify-center">

          <button
            type="submit"
            className="  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Add Todo
          </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddTodo;
