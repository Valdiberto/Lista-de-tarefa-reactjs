import { styled } from 'styled-components'
import { AppContainer } from '../../styles/Container'

export const FormContainer = styled(AppContainer)`
  flex-direction: column;

  input,
  select,
  button {
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
  form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    p {
      font-weight: bolder;
      color: ${(props) => props.theme['red-700']};
    }

    button {
      max-width: 8rem;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      background-color: ${(props) => props.theme['purple-500']};
      color: ${(props) => props.theme.white};
      border: none;
      cursor: pointer;
      transition: background-color 0.3s ease;
      &:hover {
        background-color: ${(props) => props.theme['purple-500']};
      }
      @media (max-width: 33.6875rem) {
        font-size: 0.975rem;
        padding: 0.05rem 0.4rem;
        margin-top: 6px;
      }
    }
  }
`
