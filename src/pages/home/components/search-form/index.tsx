import { Form, SearchFormContainer } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <div>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </div>
      <Form action="">
        <input type="text" placeholder="Buscar conteúdo" />
      </Form>
    </SearchFormContainer>
  )
}
