import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from 'react-bootstrap/Button'

const TodoSearch = ({ add_todo }) => {
  const { register, handleSubmit, reset } = useForm()
  const [category, setCategory] = useState('onetime')

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  return (
    <div className="todo-search">
      <form
        action=""
        onSubmit={handleSubmit((data) => {
          add_todo({ ...data, category })
          reset()
        })}
      >
        <input
          type="text"
          placeholder="Jakie zadanie szefie?"
          {...register('task', { required: true })}
        />

        <input
          type="radio"
          name="category"
          id="onetime"
          value="onetime"
          checked={category === 'onetime'}
          onChange={handleCategoryChange}
        />{' '}
        <label>Jednorazowe</label>
        <input
          type="radio"
          name="category"
          id="daily"
          value="daily"
          checked={category === 'daily'}
          onChange={handleCategoryChange}
        />{' '}
        <label>Codziennie</label>

        <Button variant="outline-primary" type="submit">
        Submit
      </Button>
      </form>
    </div>
  )
}

export default TodoSearch
