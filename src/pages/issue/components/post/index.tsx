import remarkGfm from 'remark-gfm'
import { PostContainer, PostContent } from './styles'

type PostProps = {
  content: string
}

export function Post({ content }: PostProps) {
  return (
    <PostContainer>
      <PostContent remarkPlugins={[remarkGfm]}>{content}</PostContent>
    </PostContainer>
  )
}
