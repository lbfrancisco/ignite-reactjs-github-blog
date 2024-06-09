import { Header } from '@/components/header'
import { useGitHub } from '@/hooks/use-github'
import { IssueProfile } from '@/pages/issue/components/profile'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Post } from './components/post'

export function Issue() {
  const { issue, fetchIssue } = useGitHub()
  const { number } = useParams()

  useEffect(() => {
    if (!number) return

    fetchIssue(number)
  }, [fetchIssue, number])

  return (
    <div>
      <Header />
      <IssueProfile issue={issue} />
      <Post content={issue.body} />
    </div>
  )
}
