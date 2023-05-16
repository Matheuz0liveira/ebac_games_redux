import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

type ProdutosState = {
  listaDeProdutos: Produto[]
}

const initialState: ProdutosState = {
  listaDeProdutos: []
}

const produtosSlice = createSlice({
  name: 'produtos',
  initialState,
  reducers: {
    carregarProdutos(state, action: PayloadAction<Produto[]>) {
      state.listaDeProdutos = action.payload
    }
  }
})

export const { carregarProdutos } = produtosSlice.actions
export default produtosSlice.reducer
