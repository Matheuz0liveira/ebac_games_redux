import { useEffect, useState } from 'react'
import { GlobalStyle } from './styles'
import { useDispatch, useSelector } from 'react-redux'

import Header from './components/Header'
import Produtos from './containers/Produtos'

import { RootReducer } from './store'
import { adicionarAoCarrinho } from './store/carrinho'
import { estaNosFavoritos, favoritarItem } from './store/favoritos'
import { Produto, carregarProdutos } from './store/produtos'

function App() {
  const produtos = useSelector(
    (state: RootReducer) => state.produtos.listaDeProdutos
  )

  const carrinho = useSelector((state: RootReducer) => state.carrinho.carrinho)

  const favoritos = useSelector(
    (state: RootReducer) => state.favoritos.favoritos
  )
  const estaNosFavoritosValue = useSelector(
    (state: RootReducer) => state.favoritos.estaNosFavoritos
  )

  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((res) => dispatch(carregarProdutos(res)))
  }, [])

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos.length} carrinho={carrinho.length} />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={favoritarItem}
          adicionarNoCarrinho={adicionarAoCarrinho}
        />
      </div>
    </>
  )
}

export default App
