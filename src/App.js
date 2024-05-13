import { useDispatch, useSelector } from "react-redux"; // Importing hooks from React Redux for managing state
import "./App.css"; // Importing CSS styles for the App component
import TodoForm from "./components/TodoForm"; // Importing the TodoForm component
import TodoList from "./components/TodoList"; // Importing the TodoList component
import { deleteTodo, updateToggleTodo } from "./features/todos/todoSlice"; // Importing Redux actions from the todoSlice file

function App() {
  const { todos } = useSelector((state) => state.todo); // Using useSelector to extract todos from Redux store

  // Using useDispatch hook to get the dispatch function for Redux actions
  const dispatch = useDispatch();

  // Function to handle the deletion of a todo
  const handleDeleteTodo = async (id) => {
    // Dispatching deleteTodo action with the todo ID to remove it from the store
    dispatch(deleteTodo(id));
  };

  // Function to handle toggling the completion status of a todo
  const handleUpdateTodo = (id) => {
    // Dispatching updateToggleTodo action with the todo ID to toggle its completion status
    dispatch(updateToggleTodo(id));
  };

  return (
    <div className="flex justify-center">
      {/* Flex container for centering content */}
      <div className="border shadow-md w-full p-3 bg-white my-10 rounded-lg max-w-md">
        {/* Styled container for the todo list */}
        <div className="text-xl font-semibold">Todo</div>{" "}
        {/* Heading for the todo list */}
        {todos.map((todo) => (
          <TodoList
            key={todo.id}
            todo={todo}
            handleDeleteTodo={handleDeleteTodo}
            handleUpdateTodo={handleUpdateTodo}
          />
        ))}
        <hr className="my-2 mx-0 px-0" /> {/* Horizontal line separator */}
        <TodoForm /> {/* Rendering TodoForm component for adding new todos */}
      </div>
    </div>
  );
}

export default App; // Exporting the App component as the default export
