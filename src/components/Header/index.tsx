import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import * as S from './styles'
import { Produto as ProdutoType } from '../../store/produtos'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'

export type HeaderProps = {
  favoritos: number
  carrinho: number
  itensNoCarrinho?: (produto: ProdutoType) => void
  itensFavoritos?: (produto: ProdutoType) => void
}

const Header = ({ favoritos, carrinho }: HeaderProps) => {
  const itensNoCarrinho = useSelector(
    (state: RootReducer) => state.carrinho.carrinho
  )
  const itensFavoritos = useSelector(
    (state: RootReducer) => state.favoritos.favoritos
  )

  const valorTotal = itensNoCarrinho.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{itensFavoritos.length} favoritos</span>
        <img src={cesta} />
        <span>
          {itensNoCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
