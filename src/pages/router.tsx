import { Route, Routes } from 'react-router-dom'
import { Home } from './home'
import { Issue } from './issue'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/issues/:number" element={<Issue />} />
    </Routes>
  )
}
