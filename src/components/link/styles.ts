import styled from 'styled-components'

export const LinkContainer = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  color: ${({ theme }) => theme.base};
  font-weight: bold;
  font-size: 0.75rem;
  border-bottom: 2px solid transparent;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.base};
  }
`
