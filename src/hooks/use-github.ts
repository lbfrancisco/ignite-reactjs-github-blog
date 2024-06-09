import { GitHubContext } from '@/contexts/github-context'
import { useContext } from 'react'

export function useGitHub() {
  return useContext(GitHubContext)
}
