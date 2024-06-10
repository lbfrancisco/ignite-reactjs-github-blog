import { api } from '@/lib/api'
import { Issue } from '@/types/issue'
import { User } from '@/types/user'
import { createContext, useCallback, useEffect, useState } from 'react'

type GitHubContextType = {
  user: User
  issue: Issue
  issues: Issue[]
  isIssueLoading: boolean
  fetchIssue: (number: string) => Promise<void>
  fetchIssues: (query?: string) => Promise<void>
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
  const [isIssueLoading, setIsIssueLoading] = useState(false)

  const userName = 'lbfrancisco'
  const repository = 'ignite-reactjs-github-blog'

  async function fetchUser() {
    const response = await api.get(`/users/${userName}`, {
      headers: {
        Authorization: 'Bearer AUTH_TOKEN',
      },
    })
    setUser(response.data)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  const fetchIssues = useCallback(async (query?: string) => {
    if (!query) {
      const response = await api.get(
        `/repos/${userName}/${repository}/issues`,
        {
          params: {
            _sort: 'created_at',
            _order: 'desc',
          },
          headers: {
            Authorization: 'Bearer AUTH_TOKEN',
          },
        },
      )
      setIssues(response.data)
    } else {
      const response = await api.get(
        `/search/issues?q=${query}%20repo:${userName}/${repository}`,
        {
          params: {
            _sort: 'created_at',
            _order: 'desc',
          },
          headers: {
            Authorization: 'Bearer AUTH_TOKEN',
          },
        },
      )
      setIssues(response.data)
    }
  }, [])

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  const fetchIssue = useCallback(async (number: string) => {
    setIsIssueLoading(true)

    const response = await api.get(
      `https://api.github.com/repos/${userName}/${repository}/issues/${number}`,
      {
        headers: {
          Authorization: 'Bearer AUTH_TOKEN',
        },
      },
    )

    setIssue(response.data)
    setIsIssueLoading(false)
  }, [])

  return (
    <GitHubContext.Provider
      value={{ user, issues, issue, isIssueLoading, fetchIssue, fetchIssues }}
    >
      {children}
    </GitHubContext.Provider>
  )
}
