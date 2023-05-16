import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../produtos'

type CarrinhoState = {
  carrinho: Produto[]
}

const initialState: CarrinhoState = {
  carrinho: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      if (state.carrinho.find((p) => p.id === produto.id)) {
        alert('Item já adicionado')
      } else {
        state.carrinho.push(produto)
      }
    }
  }
})

export const { adicionarAoCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer
