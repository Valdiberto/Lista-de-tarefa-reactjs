import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;

  strong {
    font-size: 2rem;
    margin-bottom: 2.5rem;

    @media (max-width: 33.6875rem) {
      font-size: 1.5rem;
    }
  }
`
