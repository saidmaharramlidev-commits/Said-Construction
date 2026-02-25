import type { PayloadAction } from '@reduxjs/toolkit'

import { createSlice } from '@reduxjs/toolkit'
export interface CounterState {
    isNavbarOpen: boolean
    blog: number
}

const initialState: CounterState = {
    isNavbarOpen: false,
    blog: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setNavbar: (state) => {
            state.isNavbarOpen = !state.isNavbarOpen
        }
        , setBlog: (state, action: PayloadAction<number>) => {
            state.blog = action.payload

        }

    },
})

export const { setNavbar, setBlog } = counterSlice.actions

export default counterSlice.reducer