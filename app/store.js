import {configureStore} from '@reduxjs/toolkit'
import todoReducer from './features/todo/todoSlice'

const store = configureStore({
    reducer: {
        todoReducer 
        // Add other reducers here...
      },
})



export default store
