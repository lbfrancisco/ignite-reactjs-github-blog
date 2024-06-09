import { PostContainer, PostContent } from './styles'

type PostProps = {
  content: string
}

export function Post({ content }: PostProps) {
  return (
    <PostContainer>
      <PostContent>{content}</PostContent>
    </PostContainer>
  )
}
