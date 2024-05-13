import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";

// Functional component for rendering a form to add new todos
const TodoForm = () => {
  // State variable for managing form input
  const [title, setTitle] = useState("");

  // Using useDispatch hook to get the dispatch function for Redux actions
  const dispatch = useDispatch();

  // Function to handle the addition of a new todo
  const handleAddTodo = async (e) => {
    e.preventDefault(); // Preventing the default form submission behavior
    dispatch(addTodo({ title })); // Dispatching addTodo action with title
    setTitle(""); // Resetting title input after adding todo
  };

  return (
    <form
      onSubmit={handleAddTodo} // Event handler for form submission
      className="flex justify-between gap-2 items-center" // Styling for form layout
    >
      <div className="w-full">
        {/* Input container */}
        <input
          type="text"
          id="first_name"
          className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" // Styling for input field
          placeholder="Add task here..." // Placeholder text for input
          required // Input is required
          onChange={(e) => setTitle(e.target.value)} // Event handler for input change
          value={title} // Value of input field
        />
      </div>
      <button className="bg-green-600 py-2 px-5 text-white rounded-lg">
        {" "}
        {/* Button for adding todo */}
        Add {/* Button text */}
      </button>
    </form>
  );
};

export default TodoForm; // Exporting the TodoForm component as the default export
