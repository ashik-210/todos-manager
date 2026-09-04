import React, { useContext, useState } from 'react'
import { MyContext } from '../context/ContextProvider'

const TodoForm = () => {
  const { addTodo } = useContext(MyContext)
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(text)
    setText('')
  }

  return (
    <div className='mt-5 sm:mt-10'>
      <div>
        <form className='flex' onSubmit={handleSubmit}>
          <input
            className='border-2 text-white sm:text-2xl border-cyan-500 outline-none sm:h-13 h-9 px-5 py-1 w-[200px] sm:w-100 border-r-0 rounded-l-full'
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type="submit"
            className='bg-emerald-300 h-9 sm:h-13 w-15 sm:w-20 font-bold px-1 sm:px-4 sm:text-2xl text-white rounded-r-full border-none'
          >
            Add
          </button>
        </form>
      </div>
    </div>
  )
}

export default TodoForm