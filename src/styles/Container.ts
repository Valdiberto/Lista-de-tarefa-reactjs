import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  padding: 1.5rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme['gray-900']};
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  span {
    font-size: 1rem;
  }

  @media ((min-width: 40.5625rem) and ( max-width: 48rem)) {
    font-size: 1.125rem;
    span {
      font-size: 0.875rem;
    }
  }

  @media ((min-width: 33.75rem) and ((max-width: 40.625rem ))) {
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    span {
      font-size: 0.74rem;
    }
  }

  @media (max-width: 33.6875rem) {
    margin-bottom: 0.5rem;
    font-size: 0.625rem;
    span {
      font-size: 0.6rem;
    }
  }
`
