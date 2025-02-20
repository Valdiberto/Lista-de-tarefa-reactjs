import { useContext } from 'react'
import { ButtonGroup, Column1, ListContainer, TaskContent } from './styles'
import { CyclesContext } from '../contexts/CyclesContext'

export function List() {
  const { filteredAdnSortedTasks, onToggleDone, onDelete } =
    useContext(CyclesContext)

  return (
    <ListContainer>
      {filteredAdnSortedTasks.map((tarefa) => (
        <Column1 key={tarefa.id}>
          <TaskContent>
            {tarefa.done ? (
              <s>{tarefa.content}</s>
            ) : (
              <strong>{tarefa.content}</strong>
            )}
            <span>{tarefa.category}</span>
          </TaskContent>
          <ButtonGroup>
            {tarefa.done ? (
              ''
            ) : (
              <button onClick={() => onToggleDone(tarefa.id)}>Completar</button>
            )}
            <button onClick={() => onDelete(tarefa.id)}>X</button>
          </ButtonGroup>
        </Column1>
      ))}
    </ListContainer>
  )
}
