import React, { useContext } from 'react'
import Top from './components/Top'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { MyContext } from './context/ContextProvider'

const App = () => {
  const { todos } = useContext(MyContext)

  return (
    <div className='h-screen bg-gray-800 flex flex-col items-center'>
      <Top />
      <TodoForm />

      <div className='mt-8 sm:mt-20 w-11/12 sm:w-[500px] max-h-[50vh] sm:max-h-[400px] overflow-y-auto space-y-3 no-scrollbar'>
        {todos.map((elem) => (
          <TodoItem key={elem.id} elem={elem} />
        ))}
      </div>
    </div>
  )
}

export default App