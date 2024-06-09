import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme['base-profile']};
  padding: 4rem 0 8.375rem;

  position: relative;
  z-index: -1;

  overflow: hidden;

  > img {
    position: absolute;
  }

  > .left {
    top: 40%;
    left: 0;
  }

  > .right {
    top: 20%;
    right: 0;
  }

  > .middle-blur {
    width: 55rem;
    height: 52px;
    position: absolute;
    bottom: 0;
    left: 26.5%;
    filter: blur(212px);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    background-color: ${({ theme }) => theme.base};
  }
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 54rem;
  margin: 4rem auto;

  display: flex;
  align-items: center;
  justify-content: center;
`
