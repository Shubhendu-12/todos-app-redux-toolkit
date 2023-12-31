import React from 'react'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    <Navbar/>
      <Todos/>
      <AddTodo/>
    </>
  )
}

export default App
