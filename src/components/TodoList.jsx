import React from "react";

// Functional component for rendering a single Todo item in the list
const TodoList = ({ todo, handleDeleteTodo, handleUpdateTodo }) => {
  return (
    <div className="my-5 px-1">
      {/* Styling for margin, padding, and bottom spacing */}
      <div className="flex h-10 justify-between items-center relative group">
        {/* Flex container for alignment */}
        <div className="flex gap-5 items-center">
          {/* Flex container for todo details */}
          <div className="flex items-center">
            {/* Flex container for checkbox */}
            <input
              type="checkbox"
              value=""
              className="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-200 rounded-full"
              onChange={() => handleUpdateTodo(todo.id)}
              checked={todo.completed}
            />
          </div>
          <div>{todo.title}</div> {/* Displaying todo title */}
        </div>
        <div className="absolute top-0 right-0 mt-2 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {/* Container for delete button */}
          <button
            onClick={() => handleDeleteTodo(todo.id)}
            className="bg-green-600 px-2.5 py-1 text-white rounded-lg"
          >
            <i className="fa-solid fa-xmark"></i> {/* Icon for delete button */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList; // Exporting the TodoList component as the default export
