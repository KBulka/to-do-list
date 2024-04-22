import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from 'react-bootstrap/Button'
import { CButtonGroup } from '@coreui/react'
import { CFormCheck } from '@coreui/react'


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

        <CFormCheck
          type="radio"
          button={{ color: 'primary', variant: 'outline' }}
          name="category"
          id="onetime"
          value="onetime"
          checked={category === 'onetime'}
          onChange={handleCategoryChange}
          label="Jednorazowe"
        />{' '}

        <CFormCheck
          type="radio"
          button={{ color: 'primary', variant: 'outline' }}
          name="category"
          id="daily"
          value="daily"
          checked={category === 'daily'}
          onChange={handleCategoryChange}
          label="Codziennie"
        />{' '}

        <Button variant="outline-primary" type="submit">
          Dodaj Zadanie
        </Button>
      </form>
    </div>
  )
}

export default TodoSearch
