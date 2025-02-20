import { createContext, ReactNode, useState } from 'react'

export interface Tarefa {
  id: number
  content: string
  done: boolean
  category: string
}

interface CyclesContextType {
  filteredAdnSortedTasks: Tarefa[]
  onToggleDone: (id: number) => void | undefined
  onDelete: (id: number) => void | undefined
  search?: string | undefined
  handleSearchChange: (newSearch: string) => void | undefined
  handleFilterChange: (newFilter: string) => void | undefined
  handleOrderChange: (newOrder: 'asc' | 'desc') => void | undefined
  filter?: string | undefined
  setTarefas: React.Dispatch<React.SetStateAction<Tarefa[]>>
}

interface CyclesContextProviderProps {
  children: ReactNode
}

export const CyclesContext = createContext({} as CyclesContextType)

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [tarefas, setTarefas] = useState<Tarefa[]>([])
  const [filter, setFilter] = useState('Todas')
  const [order, setOrder] = useState<'asc' | 'desc'>('asc')
  const [search, setSearch] = useState('')

  const onToggleDone = (id: number) => {
    setTarefas((prevTarefas) =>
      prevTarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, done: !tarefa.done } : tarefa,
      ),
    )
  }

  const onDelete = (id: number) => {
    setTarefas((prevTarefas) =>
      prevTarefas.filter((tarefa) => tarefa.id !== id),
    )
  }

  const filteredAdnSortedTasks = tarefas
    .filter((tarefa) =>
      filter === 'Completadas'
        ? tarefa.done
        : filter === 'Incompletas'
          ? !tarefa.done
          : true,
    )
    .filter((tarefa) =>
      tarefa.content.toLowerCase().includes(search.toLowerCase()),
    )
    .sort((a, b) =>
      order === 'asc'
        ? a.content.localeCompare(b.content)
        : b.content.localeCompare(a.content),
    )

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter)
  }

  const handleOrderChange = (newOrder: 'asc' | 'desc') => {
    setOrder(newOrder)
  }

  const handleSearchChange = (newSearch: string) => {
    setSearch(newSearch)
  }

  return (
    <CyclesContext.Provider
      value={{
        filteredAdnSortedTasks,
        onToggleDone,
        onDelete,
        search,
        handleSearchChange,
        handleFilterChange,
        handleOrderChange,
        filter,
        setTarefas,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
