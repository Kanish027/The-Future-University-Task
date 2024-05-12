import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { deleteTodo, updateToggleTodo } from "./features/todos/todoSlice";

function App() {
  const { todos } = useSelector((state) => state.todo);

  // Using useDispatch to dispatch actions to Redux store
  const dispatch = useDispatch();

  // Function to handle the deletion of a todo
  const handleDeleteTodo = async (id) => {
    // Dispatching deleteTodo action with todo ID
    dispatch(deleteTodo(id));
  };

  // Function to handle toggling the completion status of a todo
  const handleUpdateTodo = (id) => {
    // Dispatching updateToggleTodo action with todo ID
    dispatch(updateToggleTodo(id));
  };

  return (
    <div className="flex justify-center">
      <div className="border shadow-md w-full  p-3 bg-white my-10 rounded-lg max-w-md">
        <div className="text-xl font-semibold">Todo</div>
        {todos.map((todo) => {
          return (
            <TodoList
              key={todo.id}
              todo={todo}
              handleDeleteTodo={handleDeleteTodo}
              handleUpdateTodo={handleUpdateTodo}
            />
          );
        })}
        <hr className="my-2 mx-0 px-0" />
        <TodoForm />
      </div>
    </div>
  );
}

export default App;
