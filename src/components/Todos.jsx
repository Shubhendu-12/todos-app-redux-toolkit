import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo } from '../../app/features/todo/todoSlice'


const Todos = () => {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()
  return (
    <>
      <div>Todos</div>
      {todos?.map((todo)=>(
        
        <li key={todo.id}>
            {todo.text}
            <button
            onClick={()=>{dispatch(removeTodo(todo.id))}} >
                Remove
            </button>
        </li>
      ))}
    </>
  )
}

export default Todos

//1 If map method does not work change key name inside .map(todo) to .map(any name)  
//2 other error might be that the array is being returned as an empty array 
//3 Solution is below  -->

// You are getting a blank array[]. For this, you are facing this error. You can solve this problem two ways:

// {products && products.map((product) => (
//     <Grid item key={product.id} item xs={12} sm={6} md={4} lg={3}>
//         <Product/>
//     </Grid>
// ))};
// Or

// {products?.map((product) => (
//     <Grid item key={product.id} item xs={12} sm={6} md={4} lg={3}>
//         <Product/>
//     </Grid>
// ))};