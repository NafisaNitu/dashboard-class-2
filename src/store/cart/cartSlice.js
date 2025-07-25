import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    total: 0
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart : (state, action) => {
            
        },
        removeFromCart : (state, action) => {},
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer