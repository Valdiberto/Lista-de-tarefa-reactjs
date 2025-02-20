import { useContext } from 'react'
import { SearchContainer } from './styles'
import { CyclesContext } from '../contexts/CyclesContext'

export function Search() {
  const { search, handleSearchChange } = useContext(CyclesContext)

  return (
    <SearchContainer>
      <strong>Pesquisar:</strong>
      <input
        type="text"
        value={search}
        onChange={(e) => handleSearchChange(e.target.value)}
        placeholder="Digite aqui sua pesquisa"
      />
    </SearchContainer>
  )
}
