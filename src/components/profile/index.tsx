import { User } from '@/types/user'
import { SiGithub } from '@icons-pack/react-simple-icons'
import { ArrowUpRightFromSquare, Building, Users } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from '../link'
import {
  InfoContainer,
  InfoDescription,
  InfoFooter,
  InfoHeader,
  ProfileContainer,
} from './styles'
import { api } from '@/lib/api'

export function Profile() {
  const [user, setUser] = useState<User>({} as User)

  useEffect(() => {
    async function fetchUser() {
      const response = await api.get('/users/lbfrancisco')
      setUser(response.data)
    }

    fetchUser()
  }, [])

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
