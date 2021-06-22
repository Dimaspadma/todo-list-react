import { useState } from "react";
import { AddTodoForm } from "./components/AddTodoForm";
import { ClearTodo } from "./components/ClearTodo";
import { TodoList } from "./components/TodoList";
import { Greeting } from "./components/Greeting";
import "./styles/App.css";

const initialTodos: Array<Todo> = [
  {text: "Coding app", complete: true},
  {text: "Learn Typescript", complete: false}
];

const App: React.FC = (): JSX.Element => {

  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo){
        return {
          ...todo,
          complete: !todo.complete
        }
      } //endif
      return todo;
    }); //endmap
    setTodos(newTodos);
  }

  const addTodo: AddTodo = (newTodo) => {
    // blank value check
    newTodo.trim() !== "" &&
      setTodos([...todos, {text: newTodo, complete: false}]);
  }

  const clearTodo = () => {
    const newTodos = todos.filter(todo => !todo.complete); // filter todo only not completed todo
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <Greeting />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
      <ClearTodo clearTodo={clearTodo} />
    </div>
  );
}

export default App;
