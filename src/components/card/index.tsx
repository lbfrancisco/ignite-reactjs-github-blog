import { Issue } from '@/types/issue'
import { CardContainer, CardContent, CardHeader } from './styles'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

type CardProps = {
  issue: Issue
}

export function Card({ issue }: CardProps) {
  return (
    <CardContainer href={`/issues/${issue.number}`}>
      <CardHeader>
        <h4>{issue.title}</h4>
        <span>
          {formatDistanceToNow(issue.created_at, {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </CardHeader>
      <CardContent>{issue.body}</CardContent>
    </CardContainer>
  )
}
