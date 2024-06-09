import styled from 'styled-components'

export const SearchFormContainer = styled.div`
  width: 100%;
  max-width: 54rem;
  margin: 9.5rem auto 0;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      font-size: 1.125rem;
      color: ${({ theme }) => theme['base-subtitle']};
    }

    span {
      color: ${({ theme }) => theme['base-span']};
      font-size: 0.875rem;
    }
  }
`

export const Form = styled.form`
  display: flex;

  > input {
    flex: 1;

    border: 1px solid ${({ theme }) => theme['base-border']};
    background-color: ${({ theme }) => theme['base-input']};
    padding: 0.75rem 1rem;
    border-radius: 6px;
    color: ${({ theme }) => theme['base-text']};

    &::placeholder {
      color: ${({ theme }) => theme['base-label']};
    }
  }
`
