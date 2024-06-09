import { Header } from '@/components/header'
import { IssueProfile } from '@/pages/issue/components/profile'
import { Post } from './components/post'

export function Issue() {
  return (
    <div>
      <Header />
      <IssueProfile />
      <Post content="# HEAD <br /> <code> let number = 1</code>" />
    </div>
  )
}
