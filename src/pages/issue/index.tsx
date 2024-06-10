import { Header } from '@/components/header'
import { useGitHub } from '@/hooks/use-github'
import { IssueProfile } from '@/pages/issue/components/profile'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Post } from './components/post'

export function Issue() {
  const { fetchIssue, issue, isIssueLoading } = useGitHub()
  const { number } = useParams()

  useEffect(() => {
    if (!number) return

    fetchIssue(number)
  }, [fetchIssue, number])

  return (
    <div>
      <Header />
      {isIssueLoading ? (
        <div>Carregando...</div>
      ) : (
        issue &&
        issue.number && (
          <>
            <IssueProfile issue={issue} />
            <Post body={issue.body} />
          </>
        )
      )}
    </div>
  )
}
