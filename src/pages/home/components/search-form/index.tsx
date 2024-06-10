import { useGitHub } from '@/hooks/use-github'
import { Form, SearchFormContainer } from './styles'
import { FormEvent, useEffect, useState } from 'react'

export function SearchForm() {
  const [search, setSearch] = useState('')
  const { issues, fetchIssues } = useGitHub()

  useEffect(() => {
    if (search) {
      fetchIssues(search)
    }
  }, [fetchIssues, search])

  async function handleSubmitForm(event: FormEvent) {
    event.preventDefault()

    if (search) {
      await fetchIssues(search)
    } else {
      await fetchIssues()
    }
  }

  return (
    <SearchFormContainer>
      <div>
        <h3>Publicações</h3>
        <span>
          {issues.length} {issues.length > 1 ? 'publicações' : 'publicação'}
        </span>
      </div>
      <Form onSubmit={handleSubmitForm} action="">
        <input
          type="text"
          placeholder="Buscar conteúdo"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </Form>
    </SearchFormContainer>
  )
}
