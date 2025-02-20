import { styled } from 'styled-components'

export const Button = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    padding: 0.5rem 1rem;
    border: none;
    color: ${(props) => props.theme.white};
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  @media ((min-width: 40.562rem) and ( max-width: 48rem)) {
    button {
      padding: 0.3rem 0.8rem;
    }
  }

  @media ((min-width: 33.75rem) and ((max-width: 40.625rem ))) {
    button {
      padding: 0.2rem 0.6rem;
    }
  }

  @media (max-width: 33.6875rem) {
    button {
      font-size: 0.875rem;
      padding: 0.05rem 0.3rem;
      margin-top: 6px;
    }
  }
`
