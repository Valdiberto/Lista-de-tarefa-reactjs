import { styled } from 'styled-components'

import { AppContainer } from '../../styles/Container'

export const SearchContainer = styled(AppContainer)`
  flex-direction: column;
  input {
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme['gray-600']};
    background-color: ${(props) => props.theme['gray-800']};
    color: ${(props) => props.theme.white};
  }
`
