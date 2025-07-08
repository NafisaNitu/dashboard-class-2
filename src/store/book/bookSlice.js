import { createSlice } from '@reduxjs/toolkit'
import books from '../../data/books'

const initialState = {
    allBooks: books,
    filterBooks: books,
    searchQuery: ''
}

export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        filterBooks: (state, action) => {
            state.filterBooks = state.allBooks.filter(
                book => {
                    return book.name.toLowerCase().includes(action.payload.toLowerCase())
                })
                state.searchQuery = action.payload
        },
        addBook: (state, action) => {
            state.allBooks = [action.payload, ...state.allBooks]
            state.filterBooks = [action.payload, ...state.allBooks]
        }
    }
})

export const { filterBooks, addBook } = bookSlice.actions

export default bookSlice.reducer
