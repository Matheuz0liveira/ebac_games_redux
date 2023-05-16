import { useDispatch, useSelector } from 'react-redux'

import { Produto as ProdutoType } from '../store/produtos'

import { adicionarAoCarrinho } from '../store/carrinho'
import { favoritarItem } from '../store/favoritos'

import * as S from './styles'
import Produto from '../components/Produto'

type Props = {
  produtos: ProdutoType[]
  favoritos: ProdutoType[]
  adicionarNoCarrinho: (produto: ProdutoType) => void
  favoritar: (produto: ProdutoType) => void
}

const ProdutosComponent = ({ produtos, favoritos }: Props) => {
  const dispatch = useDispatch()

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  const handleAdicionarAoCarrinho = (produto: ProdutoType) => {
    dispatch(adicionarAoCarrinho(produto))
  }

  function handleFavoritar(produto: ProdutoType) {
    dispatch(favoritarItem(produto))
  }

  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
            favoritar={handleFavoritar}
            adicionarAoCarrinho={handleAdicionarAoCarrinho}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
