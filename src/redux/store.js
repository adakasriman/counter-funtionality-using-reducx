import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";  // importing counterReducer: reducer


export const store = configureStore({  // It used for cobmining reducers.
    reducer: {   // We can store multiple reducers here.
        counter: counterReducer  // counter is key for counterReducer.
    }
})