import { ComponentProps } from 'react'
import { LinkContainer } from './styles'

type LinkProps = ComponentProps<'a'>

export function Link({ ...props }: LinkProps) {
  return <LinkContainer {...props}>{props.children}</LinkContainer>
}
