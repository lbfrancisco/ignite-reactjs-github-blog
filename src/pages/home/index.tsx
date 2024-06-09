import { Card } from '@/components/card'
import { Header } from '@/components/header'
import { Profile } from '@/components/profile'
import { SearchForm } from './components/search-form'
import { CardList } from './styles'

export function Home() {
  return (
    <div>
      <Header />
      <Profile />
      <SearchForm />
      <CardList>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardList>
    </div>
  )
}
