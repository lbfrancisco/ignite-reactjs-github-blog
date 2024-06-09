import { Card } from '@/components/card'
import { Header } from '@/components/header'
import { Profile } from '@/components/profile'
import { useGitHub } from '@/hooks/use-github'
import { SearchForm } from './components/search-form'
import { CardList } from './styles'

export function Home() {
  const { issues } = useGitHub()

  return (
    <div>
      <Header />
      <Profile />
      <SearchForm />
      <CardList>
        {issues.length > 0 &&
          issues.map((issue) => {
            return <Card key={issue.number} issue={issue} />
          })}
      </CardList>
    </div>
  )
}
