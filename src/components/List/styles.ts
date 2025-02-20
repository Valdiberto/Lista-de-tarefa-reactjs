import { styled } from 'styled-components'
import { AppContainer } from '../../styles/Container'
import { Button } from '../../styles/Button'

export const ListContainer = styled(AppContainer)`
  gap: 2rem;
  display: flex;
  flex-direction: column;
`
export const TaskContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const Column1 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;

  @media (max-width: 33.6875rem) {
    display: block;
  }
`

export const ButtonGroup = styled(Button)`
  & button:first-child {
    background-color: ${(props) => props.theme['green-500']};
    &:hover {
      background-color: ${(props) => props.theme['green-700']};
    }
  }

  & button:last-child {
    background-color: ${(props) => props.theme['red-500']};
    &:hover {
      background-color: ${(props) => props.theme['red-700']};
    }
  }
`
