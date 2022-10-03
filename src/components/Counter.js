import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/counterSlice';

export default function Counter() {
    const dispatch = useDispatch();

    // const count = useSelector(store => store.counter.count);
    const { count } = useSelector(store => store.counter); //destructing 
    return (
        <>
            <div>counter : {count}</div>
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>increment</button>
        </>
    )
}

