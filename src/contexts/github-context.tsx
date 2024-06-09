import { api } from '@/lib/api'
import { Issue } from '@/types/issue'
import { User } from '@/types/user'
import { createContext, useEffect, useState } from 'react'

type GitHubContextType = {
  user: User
  issue: Issue
  issues: Issue[]
  fetchIssue: (number: string) => void
}

export const GitHubContext = createContext({} as GitHubContextType)

type GitHubContextProviderProps = {
  children: React.ReactNode
}

export function GitHubContextProvider({
  children,
}: GitHubContextProviderProps) {
  const [user, setUser] = useState<User>({} as User)
  const [issues, setIssues] = useState<Issue[]>([])
  const [issue, setIssue] = useState<Issue>({} as Issue)

  const userName = 'lbfrancisco'
  const repository = 'ignite-reactjs-github-blog'

  async function fetchUser() {
    const response = await api.get(`/users/${userName}`)
    setUser(response.data)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  async function fetchIssues(query?: string) {
    const response = await api.get(`/repos/${userName}/${repository}/issues`, {
      params: {
        _sort: 'created_at',
        _order: 'desc',
        q: query,
      },
    })
    setIssues(response.data)
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  async function fetchIssue(number: string) {
    const response = await api.get(
      `https://api.github.com/repos/${userName}/${repository}/issues/${number}`,
    )

    setIssue(response.data)
  }

  return (
    <GitHubContext.Provider value={{ user, issues, issue, fetchIssue }}>
      {children}
    </GitHubContext.Provider>
  )
}
