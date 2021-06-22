import { ChangeEvent, FormEvent, useState } from "react"

interface IAddTodoFormOwnProps {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<IAddTodoFormOwnProps> = ({ addTodo }): JSX.Element => {

  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  }

  const handleClick = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addTodo(newTodo);
    setNewTodo(""); // clear input value
  }

  return (
    <div className='AddTodoForm'>
      <form>
        <input type="text" value={newTodo} onChange={handleChange} />
        <button type="submit" onClick={handleClick} >Add Todo</button>
      </form>
    </div>
  )
}