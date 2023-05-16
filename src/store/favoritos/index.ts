import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../produtos'

type FavoritosState = {
  favoritos: Produto[]
  estaNosFavoritos: boolean
}

const initialState: FavoritosState = {
  favoritos: [],
  estaNosFavoritos: false
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritarItem: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      if (state.favoritos.find((p) => p.id === produto.id)) {
        state.favoritos = state.favoritos.filter((p) => p.id !== produto.id)
      } else {
        state.favoritos.push(produto)
      }
      state.estaNosFavoritos = state.favoritos.some(
        (produto) => produto.id === action.payload.id
      )
    },
    estaNosFavoritos: (state, action: PayloadAction<Produto>) => {
      const produtoSelecionado = action.payload
      state.favoritos.some((produto) => produto.id === produtoSelecionado.id)
    }
  }
})

export const { favoritarItem, estaNosFavoritos } = favoritosSlice.actions
export default favoritosSlice.reducer
