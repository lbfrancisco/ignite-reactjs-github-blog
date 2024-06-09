import { useGitHub } from '@/hooks/use-github'
import { SiGithub } from '@icons-pack/react-simple-icons'
import { ArrowUpRightFromSquare, Building, Users } from 'lucide-react'
import { Link } from '../link'
import {
  InfoContainer,
  InfoDescription,
  InfoFooter,
  InfoHeader,
  ProfileContainer,
} from './styles'

export function Profile() {
  const { user } = useGitHub()

  return (
    <ProfileContainer>
      <img src={user.avatar_url} alt="" />
      <InfoContainer>
        <InfoHeader>
          <strong>{user.name}</strong>
          <Link href={`https://github.com/${user.login}`} target="_blank">
            GitHub
            <ArrowUpRightFromSquare size={12} />
          </Link>
        </InfoHeader>
        <InfoDescription>{user.bio}</InfoDescription>
        <InfoFooter>
          <span>
            <SiGithub size={18} />
            {user.login}
          </span>
          {user.company && (
            <span>
              <Building size={18} />
              {user.company}
            </span>
          )}

          <span>
            <Users size={18} />
            {user.followers} seguidores
          </span>
        </InfoFooter>
      </InfoContainer>
    </ProfileContainer>
  )
}
