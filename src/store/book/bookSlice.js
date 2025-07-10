import { createSlice } from '@reduxjs/toolkit'
import books from '../../data/books'

const initialState = {
    allBooks: books,
    filterBooks: books,
    searchQuery: '',
    currentPage: 1,
    itemsPerPage: 10

}

export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        filterBooks: (state, action) => {
            const query = action.payload.toLowerCase()
            state.filterBooks = state.allBooks.filter(book => {
                return book.name.toLowerCase().includes(query) || book.description.toLowerCase().includes(query) || book.status.toLowerCase().includes(query)
            })
            state.searchQuery = action.payload
            state.currentPage = 1 

        },
        addBook: (state, action) => {
            state.allBooks = [action.payload, ...state.allBooks]
            state.filterBooks = [action.payload, ...state.allBooks]
        },
        deleteBook: (state, action) => {
            state.allBooks = state.allBooks.filter(book => book.id !== action.payload)
            state.filterBooks = state.filterBooks.filter(book => book.id !== action.payload)
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        setItemsPerPage: (state, action) => {
            state.itemsPerPage = action.payload
            state.currentPage = 1 
        }
    }
})

export const { filterBooks, addBook, deleteBook, setCurrentPage, setItemsPerPage } = bookSlice.actions

export default bookSlice.reducer
