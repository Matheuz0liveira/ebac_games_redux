import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './carrinho'
import favoritosReducer from './favoritos'
import produtosReducer from './produtos'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritos: favoritosReducer,
    produtos: produtosReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
