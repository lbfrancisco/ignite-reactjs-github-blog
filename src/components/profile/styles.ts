import styled from 'styled-components'

export const ProfileContainer = styled.div`
  background-color: ${({ theme }) => theme['base-profile']};
  width: 100%;
  max-width: 54rem;
  margin: -5rem auto;

  padding: 2rem 2.5rem;
  border-radius: 10px;

  display: flex;
  gap: 2rem;

  > img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`

export const InfoContainer = styled.div``

export const InfoHeader = styled.div`
  margin-bottom: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > strong {
    font-size: 1.5rem;
    color: ${({ theme }) => theme['base-title']};
  }

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

export const InfoDescription = styled.div`
  margin-bottom: 1.5rem;
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
