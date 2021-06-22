interface IClearTodoOwnProps {
  clearTodo: () => void;
}

export const ClearTodo: React.FC<IClearTodoOwnProps> = ({ clearTodo }): JSX.Element => {

  const handleClick = (): void => {
    clearTodo();
  }

  return (
    <div className="ClearTodo">
      <label><small onClick={() => {handleClick()}}>clear completed todo</small></label>
    </div>
  )
}