import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { PostContainer, PostContent } from './styles'

type PostProps = {
  body: string
}

export function Post({ body }: PostProps) {
  return (
    <PostContainer>
      <PostContent
        // eslint-disable-next-line react/no-children-prop
        children={body}
        components={{
          code(props) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { children, className, node, ...rest } = props
            const match = /language-(\w+)/.exec(className || '')
            return match ? (
              <SyntaxHighlighter
                {...rest}
                PreTag="div"
                // eslint-disable-next-line react/no-children-prop
                children={String(children).replace(/\n$/, '')}
                language={match[1]}
                style={materialDark}
              />
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            )
          },
        }}
      />
    </PostContainer>
  )
}
