import React from "react";

const TodoList = ({ todo, handleDeleteTodo, handleUpdateTodo }) => {
  return (
    <div className="my-5 px-1 pb-5">
      <div className="flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <div class="flex items-center">
            <input
              type="checkbox"
              value=""
              className="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-200 rounded-full"
              onChange={() => handleUpdateTodo(todo.id)}
              checked={todo.completed}
            />
          </div>
          <div>{todo.title}</div>
        </div>
        <div>
          <button
            onClick={() => handleDeleteTodo(todo.id)}
            className="bg-green-600 px-2.5 py-1 text-white rounded-lg"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
