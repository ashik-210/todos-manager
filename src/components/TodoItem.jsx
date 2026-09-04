import React, { useContext, useState } from 'react'
import { Save, Pencil, Trash2 } from 'lucide-react'
import { MyContext } from '../context/ContextProvider'

const TodoItem = ({ elem }) => {
  const { updateTodo, deleteTodo, toggleTodo } = useContext(MyContext)

  const [newText, setNewText] = useState(elem.text)
  const [isEditableText, setIsEditableText] = useState(false)

  const handleEditToggle = (e) => {
    e.preventDefault()
    if (elem.completed) return // block editing completed todos

    if (isEditableText) {
      updateTodo(elem.id, newText)
    }
    setIsEditableText((prev) => !prev)
  }

  const handleDelete = () => {
    deleteTodo(elem.id)
  }

  const handleToggle = () => {
    toggleTodo(elem.id)
    setIsEditableText(false)
  }

  return (
    <div id={elem.id} className='flex justify-between items-center gap-2 px-3 sm:px-4 py-3 w-full bg-gray-700 rounded-lg'>
        <div className='flex items-center gap-2 sm:gap-3 flex-1 min-w-0'>
            <input 
              type="checkbox" 
              className='w-4 h-4 shrink-0 accent-purple-500 cursor-pointer' 
              checked={elem.completed}
              onChange={handleToggle}
            />
            <input 
              type="text" 
              className={`bg-transparent outline-none w-full min-w-0 truncate tracking-wide text-sm sm:text-base ${
                elem.completed ? 'line-through text-gray-500' : 'text-white'
              }`}
              value={isEditableText ? newText : elem.text}
              readOnly={!isEditableText || elem.completed}
              onChange={(e) => setNewText(e.target.value)}
            />
        </div>
        <div className='flex items-center gap-1 shrink-0'>
            <button 
              className={`p-1.5 rounded ${
                elem.completed 
                  ? 'text-gray-500 cursor-not-allowed' 
                  : 'text-blue-400 hover:text-blue-300 hover:bg-gray-600'
              }`}
              onClick={handleEditToggle}
              disabled={elem.completed}
            >
              {isEditableText ? <Save size={16} /> : <Pencil size={16} />}
            </button>
            <button className='text-red-400 hover:text-red-300 p-1.5 rounded hover:bg-gray-600' onClick={handleDelete}>
              <Trash2 size={16} />
            </button>
        </div>
    </div>
  )
}

export default TodoItem