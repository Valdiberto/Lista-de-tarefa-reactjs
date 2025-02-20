import { styled } from 'styled-components'
import { AppContainer } from '../../styles/Container'
import { Button } from '../../styles/Button'

export const FilterContainer = styled(AppContainer)`
  gap: 2rem;
  padding: 1.5rem;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Column1 = styled(Column)`
  flex: 1;

  select {
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme['gray-600']};
    background-color: ${(props) => props.theme['gray-800']};
    color: ${(props) => props.theme.white};

    @media (max-width: 33.6875rem) {
      padding: 0.3rem;
      font-size: 0.625rem;
    }
  }
`
export const Column2 = styled(Column)`
  flex: 1;
  justify-content: flex-end;
`
export const ButtonGroup = styled(Button)`
  button {
    background-color: ${(props) => props.theme['purple-500']};
    &:hover {
      background-color: ${(props) => props.theme['purple-700']};
    }
  }
`
