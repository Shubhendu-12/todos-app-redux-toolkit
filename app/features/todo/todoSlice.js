import { createSlice, nanoid } from "@reduxjs/toolkit";

// const initialState = {
//     todos:[
//         {
//             id:1,
//             text:"Hello"
//         }
//     ]
// }
// The above code is to define initial state seperately

const todoSlice = createSlice({ 
    name: "todo", 
    initialState:{
        todos:[
            {
            id:1,
            text:"Hello"
            }
        ]
       
    },
    reducers: {
        addTodo:(state,action)=>{
         const todo = {
            id : nanoid(),
            text: action.payload
         }
        state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>{
                todo.id !== action.payload
            })
        },
        // updateTodo:(state,action)=>{
        //     let index= state.todos.findIndex((item)=> item.id===action.payload.id);
        // }
    }
})

export const {addTodo,removeTodo} = todoSlice.actions
export default todoSlice.reducer;