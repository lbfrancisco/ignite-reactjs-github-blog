import styled from 'styled-components'

export const IssueProfileContainer = styled.div`
  background-color: ${({ theme }) => theme['base-profile']};
  width: 100%;
  max-width: 54rem;
  margin: -5rem auto;

  padding: 2rem 2.5rem;
  border-radius: 10px;

  > img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const InfoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > a {
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
  }
`

export const InfoTitle = styled.strong`
  font-size: 1.5rem;
  color: ${({ theme }) => theme['base-title']};
`

export const InfoFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: default;

    text-decoration: none;
    color: ${({ theme }) => theme['base-subtitle']};

    > svg {
      color: ${({ theme }) => theme['base-label']};
    }

    &:hover {
      filter: brightness(1.5);
      transition: filter 0.2s;
    }
  }
`
