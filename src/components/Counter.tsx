'use client'
import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '@/redux/slices/counterSlice'

const Counter = () => {
  const dispatch = useDispatch(); // Hook to get the dispatch function
  return (
    <div>
      <button
        onClick={() => {
          dispatch(increment()); // Dispatch the increment action
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
