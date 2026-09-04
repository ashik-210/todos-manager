import React, { createContext, useEffect, useState } from 'react'

export const MyContext = createContext()

export const ContextProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    const stored = localStorage.getItem("todos")
    return stored ? JSON.parse(stored) : []
  })

  const addTodo = (text) => {
    setTodos((prev) => [
      { id: Date.now(), text, completed: false },
      ...prev
    ])
  }

  const updateTodo = (id, newText) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    )
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    )
  }

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <MyContext.Provider
      value={{
        todos,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleTodo,
      }}
    >
      {children}
    </MyContext.Provider>
  )
}