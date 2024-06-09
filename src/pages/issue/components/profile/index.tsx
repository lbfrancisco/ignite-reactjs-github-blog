import { SiGithub } from '@icons-pack/react-simple-icons'
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

export function IssueProfile() {
  return (
    <IssueProfileContainer>
      <InfoWrapper>
        <InfoHeader>
          <Link href="/">
            <ArrowLeft size={12} />
            Voltar
          </Link>
          <Link href="/">
            Ver no GitHub
            <ArrowUpRightFromSquare size={12} />
          </Link>
        </InfoHeader>
        <InfoTitle>JavaScript types and data structures</InfoTitle>
        <InfoFooter>
          <span>
            <SiGithub size={18} />
            lbfrancisco
          </span>
          <span>
            <Calendar size={18} />
            Há 1 dia
          </span>
          <span>
            <MessageCircle size={18} />
            10 comentários
          </span>
        </InfoFooter>
      </InfoWrapper>
    </IssueProfileContainer>
  )
}
