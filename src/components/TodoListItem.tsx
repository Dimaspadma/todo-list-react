import Checkbox from './Checkbox'

interface ITodoListItemOwnProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<ITodoListItemOwnProps> = ({ todo, toggleTodo }): JSX.Element => {
  return (
    <div className='TodoListItem'>
      <Checkbox checked={todo.complete} toggleTodo={toggleTodo} todo={todo} />
      <label className={todo.complete ? 'complete' : ''}
        onClick={() => toggleTodo(todo)}
      >
        {todo.text}
      </label>
    </div>
  )
}