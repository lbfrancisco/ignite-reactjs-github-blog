import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './pages/router'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { GitHubContextProvider } from './contexts/github-context'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GitHubContextProvider>
          <Router />
        </GitHubContextProvider>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}
