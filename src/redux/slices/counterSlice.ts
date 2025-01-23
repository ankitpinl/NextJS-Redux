import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    status: 'idle'
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            console.log('state', state);
            state.value += 1
        }
    }
})

console.log('counterSlice', counterSlice);

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;