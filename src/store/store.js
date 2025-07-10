import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import bookReducer from './book/bookSlice'
import  preferenceReducer  from './preference/preferenceSlice'
import cartReducer from './cart/cartSlice'


const rootReducer = combineReducers({
  book: bookReducer,
  preference: preferenceReducer,
  cart: cartReducer
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
})

export const persistor = persistStore(store)