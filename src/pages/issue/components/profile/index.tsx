import { Issue } from '@/types/issue'
import { SiGithub } from '@icons-pack/react-simple-icons'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import {
  ArrowLeft,
  ArrowUpRightFromSquare,
  Calendar,
  MessageCircle,
} from 'lucide-react'
import { Link } from '../../../../components/link'
import {
  InfoFooter,
  InfoHeader,
  InfoTitle,
  InfoWrapper,
  IssueProfileContainer,
} from './styles'

type IssueProfileProps = {
  issue: Issue
}

export function IssueProfile({ issue }: IssueProfileProps) {
  return (
    <IssueProfileContainer>
      <InfoWrapper>
        <InfoHeader>
          <Link href="/">
            <ArrowLeft size={12} />
            Voltar
          </Link>
          <Link href={issue.html_url}>
            Ver no GitHub
            <ArrowUpRightFromSquare size={12} />
          </Link>
        </InfoHeader>
        <InfoTitle>{issue.title}</InfoTitle>
        <InfoFooter>
          <span>
            <SiGithub size={18} />
            {/* {issue.user.login} */}
          </span>
          <span>
            <Calendar size={18} />
            {formatDistanceToNow(new Date(issue.created_at), {
              addSuffix: true,
              locale: ptBR,
            })}
          </span>
          <span>
            <MessageCircle size={18} />
            {issue.comments} {issue.comments > 1 ? 'comentários' : 'comentário'}
          </span>
        </InfoFooter>
      </InfoWrapper>
    </IssueProfileContainer>
  )
}
