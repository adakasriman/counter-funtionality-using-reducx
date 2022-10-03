import { createSlice } from "@reduxjs/toolkit";


const initialState = {  // It is for initial state for reducer.
    count: 0  // initilising count "0"
}

const counterSlice = createSlice({ // it creates Slice(reducer)
    name: "counter", // name key for slice(reducer) name
    initialState, // initilising state in reducer
    reducers: {   // actions for opertions
        increment: (store) => {    // it is for incrementing count value
            store.count += 1;
        },
        decrement: (store) => {  // it is for decrementing count value
            store.count -= 1;
        }
    }
})

export const { increment,decrement } = counterSlice.actions; // counterSlice(/reducer/).actions have inbuilt of reducer actions.

export default counterSlice.reducer; //it line provides the reducer 