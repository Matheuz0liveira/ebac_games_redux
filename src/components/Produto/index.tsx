import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { Produto as ProdutoType } from '../../store/produtos'
import { adicionarAoCarrinho } from '../../store/carrinho'
import { favoritarItem } from '../../store/favoritos'

import * as S from './styles'

type Props = {
  produto: ProdutoType
  favoritar: (produto: ProdutoType) => void
  estaNosFavoritos: boolean
  adicionarAoCarrinho: (produto: ProdutoType) => void
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto, estaNosFavoritos }: Props) => {
  const dispatch = useDispatch()

  const favoritos = useSelector((state: RootReducer) => state.favoritos)

  function handleAdicionarAoCarrinho() {
    dispatch(adicionarAoCarrinho(produto))
  }
  function handleFavoritar() {
    dispatch(favoritarItem(produto))
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={handleFavoritar} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={handleAdicionarAoCarrinho} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
