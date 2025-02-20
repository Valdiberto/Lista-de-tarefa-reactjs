import { FormEvent, useContext, useState } from 'react'
import { FormContainer } from './styles'
import * as zod from 'zod'
import { CyclesContext } from '../contexts/CyclesContext'

const tarefaSchema = zod.object({
  content: zod
    .string()
    .min(1, 'A tarefa não pode estar vazia')
    .max(30, 'A tarefa não pode exceder 60 caracteres'),

  category: zod.string(),
})

export function Form() {
  const { setTarefas } = useContext(CyclesContext)

  const [input, setInput] = useState('')
  const [category, setCategory] = useState('Trabalho')
  const [error, setError] = useState<string | null>(null)

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const result = tarefaSchema.safeParse({ content: input, category })
    if (!result.success) {
      setError(result.error.errors[0].message)
      return
    }
    const newTarefa = {
      id: Math.random(),
      content: input,
      category,
      done: false,
    }

    setTarefas((prevTarefas) => [...prevTarefas, newTarefa])
    setInput('')
    setCategory('Trabalho')
    setError(null)
  }

  return (
    <FormContainer>
      <header>Criar tarefa:</header>
      <form onSubmit={handleSubmit} method="POST">
        {error && <p>{error}</p>}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escreva sua tarefa aqui"
          required
          maxLength={30}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>

        <button type="submit">Criar tarefa</button>
      </form>
    </FormContainer>
  )
}
