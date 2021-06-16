interface ITodoListItemOwnProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<ITodoListItemOwnProps> = ({ todo, toggleTodo }): JSX.Element => {
  return (
    <li>
      <label className={todo.complete ? 'complete' : ''}>
        <input type="checkbox" checked={todo.complete} onChange={() => toggleTodo(todo)} />
        {todo.text}
      </label>
    </li>
  )
}