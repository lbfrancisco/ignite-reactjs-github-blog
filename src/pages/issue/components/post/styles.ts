import Markdown from 'react-markdown'
import styled from 'styled-components'

export const PostContainer = styled.main`
  width: 100%;
  max-width: 54rem;
  margin: 7.5rem auto 0;
  padding-inline: 2rem;
  text-align: justify;
`

export const PostContent = styled(Markdown)`
  > pre div {
    background-color: ${({ theme }) => theme['base-post']} !important ;
  }

  > pre div code {
    background-color: ${({ theme }) => theme['base-post']} !important ;
  }
`
