import styled from 'styled-components'

export const CardContainer = styled.a`
  background-color: ${({ theme }) => theme['base-post']};
  padding: 2rem;
  border-radius: 10px;
  max-height: 16.25rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  border: 2px solid transparent;

  text-decoration: none;
  color: ${({ theme }) => theme['base-text']};

  &:hover {
    border: 2px solid ${({ theme }) => theme['base-border']};
    transition: border-color 0.2s;
  }
`

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  margin-bottom: 1.25rem;

  > h4 {
    font-size: 1.25rem;
    color: ${({ theme }) => theme['base-title']};
    margin: 0;
    flex-grow: 1;
  }

  > span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['base-span']};
    margin-left: 1rem; /* Ajuste conforme necessário */
    white-space: nowrap; /* Para evitar quebra de linha */
  }
`

export const CardContent = styled.p`
  flex-grow: 1;
  overflow: hidden;
  white-space: normal;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  position: relative;
`
