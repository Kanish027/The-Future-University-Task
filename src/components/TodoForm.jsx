import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";

const TodoForm = () => {
  // State variables for managing form input form
  const [title, setTitle] = useState("");

  // Using useDispatch to dispatch actions to Redux store
  const dispatch = useDispatch();

  // Function to handle the addition of a new todo
  const handleAddTodo = async (e) => {
    e.preventDefault(); // Preventing the default form submission behavior
    dispatch(addTodo({ title })); // Dispatching addTodo action with title and description
    setTitle(""); // Resetting title input after adding todo
  };

  return (
    <form
      onSubmit={handleAddTodo}
      className="flex justify-between gap-2 items-center"
    >
      <div className="w-full">
        <input
          type="text"
          id="first_name"
          className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
          placeholder="Add task here..."
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <button className="bg-green-600 py-2 px-5 text-white rounded-lg">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
