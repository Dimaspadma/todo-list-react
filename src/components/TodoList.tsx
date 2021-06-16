import { TodoListItem } from "./TodoListItem"

interface ITodoListOwnProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<ITodoListOwnProps> = ({todos, toggleTodo}): JSX.Element => {

  return (
    <ul>
      {todos.map( todo => <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} /> )}
    </ul>
  )
}