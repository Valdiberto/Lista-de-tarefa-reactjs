import { useContext } from 'react'
import { ButtonGroup, Column1, Column2, FilterContainer } from './styles'
import { CyclesContext } from '../contexts/CyclesContext'

export function Filter() {
  const { handleFilterChange, handleOrderChange, filter } =
    useContext(CyclesContext)

  return (
    <FilterContainer>
      <Column1>
        <strong>Filtrar:</strong>
        <span>Status:</span>
        <select
          value={filter}
          onChange={(e) => handleFilterChange(e.target.value)}
        >
          <option value="Todas">Todas</option>
          <option value="Completadas">Completadas</option>
          <option value="Incompletas">Incompletas</option>
        </select>
      </Column1>
      <Column2>
        <span>Ordem alfabética:</span>
        <ButtonGroup>
          <button onClick={() => handleOrderChange('asc')}>Asc</button>
          <button onClick={() => handleOrderChange('desc')}>Desc</button>
        </ButtonGroup>
      </Column2>
    </FilterContainer>
  )
}
