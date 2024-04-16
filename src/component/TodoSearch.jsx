import React from 'react'
import { useForm } from 'react-hook-form'

const TodoSearch = ({add_todo}) => {
  
const {register, handleSubmit, reset } = useForm()

  return (
    <div className="todo-search">
      <form action='' onSubmit={handleSubmit((data)=> {
                add_todo(data)
                reset()
      })}>
        <input type="text" placeholder='Jakie zadanie szefie?' {...register("task", {required: true})} />
        <button>Add</button>
      </form>
    </div>
  )
}

export default TodoSearch