import { useGitHub } from '@/hooks/use-github'
import { Form, SearchFormContainer } from './styles'

export function SearchForm() {
  const { issues } = useGitHub()

  return (
    <SearchFormContainer>
      <div>
        <h3>Publicações</h3>
        <span>
          {issues.length} {issues.length > 1 ? 'publicações' : 'publicação'}
        </span>
      </div>
      <Form action="">
        <input type="text" placeholder="Buscar conteúdo" />
      </Form>
    </SearchFormContainer>
  )
}
