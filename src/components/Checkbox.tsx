interface ICheckboxOwnProps {
  checked: boolean;
  todo: Todo;
  toggleTodo: ToggleTodo;
}

const Checkbox:React.FC<ICheckboxOwnProps> = ({checked, toggleTodo, todo}) => {
  return (
    <div 
      className={checked ? "Checkbox CheckboxComplete" : "Checkbox"} 
      onClick={() => toggleTodo(todo)}
    />
  )
}

export default Checkbox;